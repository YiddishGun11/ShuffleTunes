'use strict'

const axios = require('axios');
const argon = require('./argon2id');
const db = require('../database/database');
const { validationResult } = require('express-validator');
const ESAPI = require('node-esapi');
const sftpClient = require('ssh2-sftp-client');
const configFtp = require('../ftp/ftp');
const crypto = require('crypto');
//GET 

const whoIsConnected = async (cookie) => {
    if (Object.keys(cookie).length === 0){    //cookie is empty
        return false
    }
    const results = await db.query(`CALL who_is_sessionUser (?)`, [cookie.sessionId])
    if (results[0][0][0].pseudo === null){
            return false
        }
    return results[0][0][0].pseudo
        
}

const getPlaylists = (request, response) =>{
    db.query('CALL get_playlists_list(?)', request.params.id)
        .then((results) => {
            return response.status(200).send(results);
        })

        .catch((error) => {
            return response.status(400);
        })
}

const getSongsByPlaylist = (request, response) =>{

    let sql = "CALL get_songs_by_playlistId(?)"

    db.query(sql, request.params.id,)
        .then((results) => {
            return response.status(200).send(results);
        })

        .catch((error) => {
            return response.status(400);
        })
}


const getSongs = (request, response) =>{
    
    db.query("CALL get_songs_user(?)", request.params.id)
        .then((results) => {
            return response.status(200).send(results);
        })

        .catch((error) => {
            return response.status(400);
        })

}



//POST

const createPlaylist = (request, response, next) =>{
    const playlistTitle = request.body.playlistName;
    const userId = request.body.userId;


    try {
        const errors = validationResult(request)

        if(!errors.isEmpty()){
            return response.status(400).send(errors.array())
        }

        db.query("CALL insert_playlist(?, ?)", [playlistTitle, userId])
            .then((results) => {
                return response.status(200).send(results);
            })
    
            .catch(() => {
                if (errors.sqlState === '45000'){ //Expected error
                    return response.status(409).send('Playlist already exist');
                }
                return response.status(500);
            })
    }

    catch(error){
        response.status(400).json(error);
        next(error);
    }

}


const insertSong = (request, response) =>{
    let data = request.body;

    db.query("INSERT INTO tb_musics_playlists SET ?", [data])
        .then((results) => {
            return response.status(200).send(results);
        })

        .catch((error) => {
            return response.send(ESAPI.encoder().encodeForJavascript(ESAPI.encoder().encodeForHTML(error)));
        })
}

const isHuman = async (token) => {
    const secret = process.env.CAPTCHA_SECRET;
    const response = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`
    );

     return await response.data.success
}

const register = async (request, response, next) => {
    try {
        const errors = validationResult(request);
        const username = request.body.pseudo;

        if (!errors.isEmpty()) {
            return response.status(400).send(errors.array())
        }
        
        if (! isHuman(request.body.token)){ //if user fail captcha
            console.log("hey")
            return response.status(400).send("You have to be human to register !");
        }

        db.query(`CALL register(?, ?)`, [username, await argon.hashString(request.body.password)])
        .then(() => {
            const sftp = new sftpClient();

            sftp.connect(configFtp)
            .then(async () => {
                if (await sftp.exists(`/home/pi/Music/${username}`) === 'd'){ // Check si l'utilisateur a un dossier perso
                    sftp.rmdir(`/home/pi/Music/${username}`, true); 
                }
                sftp.mkdir(`/home/pi/Music/${username}`)
            })
        })
        .then(() => {

            return response.status(201).send('Your account is now created');
        })
        .catch(errors => {
            if (errors.sqlState === '45000'){ //Expected error
                return response.status(409).send('Pseudo already exist');
            }
            return response.status(500); // Unexpected error
        })
    }

    catch (error) {
        console.log(error);
        next(error);
    }
}


const userInfos = (request, response) => {

    db.query("CALL get_user_id(?)", request.params.id)
        .then((results) => {
            return response.status(200).send(results);
        })

        .catch((error) => {
            return response.status(400);
        })

}



const uploadMusic = async (request, response) => {

    try {
        if (! request.files){
            return response.status(400).send('You must send autorized file(s)');
        }
        
        const userName = await whoIsConnected(request.signedCookies)
        if (! userName){
            return response.status(403).send('You have to be connected');
        }

        const sftp = new sftpClient();

        sftp.connect(configFtp)
        .then(async () => {
            if (await sftp.exists(`/home/pi/Music/${userName}`) === 'd'){ // Check si l'utilisateur a un dossier perso
                for (const musicfile of request.files){
                    if (! await sftp.exists(`/home/pi/Music/${userName}/${musicfile.originalname}`)) { // Skip if file already exist
                        await sftp.put(musicfile.buffer, `/home/pi/Music/${userName}/${musicfile.originalname}`);
    
                        await db.query(`CALL post_new_music(? ,?)`, [userName, musicfile.originalname]) // add the newly added file into the DB
                        .catch(async error => {// if DB error, delete file and cancel upload
                            await sftp.delete(`/home/pi/Music/${userName}/${musicfile.originalname}`); 
                            sftp.end()
                            return response.status(500).send();
                        })
                    }
                }
                sftp.end()
                return response.status(201).send('The music are now uploaded') 

            } else {
                return response.status(500).send()
            }
        })
        .catch( error => {
            console.log(error)
            return response.status(500).send();
        })
   
    }
    catch (error) {
        response.status(500).send()
    }
    
}

const login = async (request, response, next) => {
    try {
        if (await whoIsConnected(request.signedCookies)){
            return response.status(200).send()
        }
        const validationErrors = validationResult(request);
        if (!validationErrors.isEmpty()) {
            return response.status(400).send(validationErrors.array())
        }

        db.query(`CALL login(?)`, [request.body.pseudo])
        .then (async results => {
            if (await argon.verifyString(results[0][0][0].password, request.body.password)){
                const sessionId = crypto.randomUUID();
                await db.query(`CALL post_new_session (?, ?)`, [sessionId, results[0][0][0].pseudo])
                .then(() => {
                    return response.status(200).cookie("sessionId", sessionId, {
                        
                        secure: true,
                        httpOnly : true,
                        sameSite : "none", //Should be "strict" in prod
                        maxAge : 1 * 60 * 60 * 2 * 1000, //2 hours
                        signed: true
                    }).send()
                }) 
                .catch(() => {
                    return response.status(500).send("Error while login in. Please retry later");
                })          
            } else {
                return response.status(401).send('Invalid Pseudo or Password!');
            }
        })
        .catch(error => {
            if (error.sqlState == 45000) {
                return response.status(401).send('Invalid Pseudo or Password!');
            }
            return response.status(500).send();
        })

    } catch (error) {
        console.log(error);
        next(error);
    }
}

const logout = async(request, response, next) => {
    try {
        if (await whoIsConnected(request.signedCookies)){
            db.query(`CALL delete_session (?)`, [request.signedCookies.sessionId])
            .then(() => {
                return response.status(200).clearCookie('sessionId').send();
            })
            .catch(() => {
                return response.status(500).send();
            })
        } else {
            return response.status(403).send();
        }

    } catch (error) {
        console.log(error)
        next(error)
    }
}

const isAuthenticated = async (request, response, next) => {
    try {
        if (await whoIsConnected(request.signedCookies)){
            return response.status(200).send(true);
        }
        return response.status(200).send(false);

    } catch (error) {
        console.log(error)
        next(error)
    }
}
/*
EXEMPLE DE REQUETE FINALE avec express validator


const insertStudent = (request,response,next)=>{
    const data = request.body;


    try{
        const errors = validationResult(request);

        if(!errors.isEmpty()){
            return response.status(400).json({
                success: false,
                errors: errors.array(),
            });
        }
        
        dataStudent(data,(err,results)=>{
            if(err){
                response.send(err);
            }
            else{
                response.status(200).json(results);
            }
        });

    }

    catch(error){
        console.log(error);
        next(error);
    }

}

*/



module.exports = {
    getPlaylists,
    createPlaylist,
    insertSong,
    getSongsByPlaylist,
    getSongs,
    register,
    login,
    userInfos,
    uploadMusic,
    logout,
    isAuthenticated
}