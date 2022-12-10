'use strict'

const axios = require('axios');
const argon = require('./argon2id');
const db = require('../database/database');
const { validationResult } = require('express-validator');
const ESAPI = require('node-esapi');
const sftpClient = require('ssh2-sftp-client');
const configFtp = require('../ftp/ftp');

//GET 

const getPlaylists = (request, response) =>{
    db.query('CALL get_playlists_list', (error, results)=>{
        if(error){
            console.log(error);
        }
        else{
            response.status(200).json(results)
        }
    })
}

const getSongsByPlaylist = (request, response) =>{

    let sql = "CALL get_songs_by_playlistId(?)"

    db.query(sql, request.params.id, (error, results)=>{
        if(error){
            throw error
        }
        else{
            response.status(200).json(results)
        }
    })
}


const getSongs = (request, response) =>{
    
    db.query("CALL get_songs_user(?)", request.params.id, (error, results)=>{
        if(error){
            throw error;
        }
        else{
            response.status(200).json(results);
        }
    })
}



//POST

const createPlaylist = (request, response, next) =>{
    let data = request.body;

    try {
        const errors = validationResult(request)

        if(!errors.isEmpty()){
            return response.status(400).json({
                success: false,
                errors : errors.array()
            });
        }

        db.query("INSERT INTO tb_playlists SET ?", [data], (error,results)=>{
            if(error){
                response.send(ESAPI.encoder().encodeForJavascript(ESAPI.encoder().encodeForHTML(error)));
            }
            else{
                response.status(200).json(results);
            }
        });
        
    }

    catch(error){
        response.status(400).json(error);
        next(error);
    }

}


const insertSong = (request, response) =>{
    let data = request.body;

    db.query("INSERT INTO tb_musics_playlists SET ?", [data], (error,results)=>{
        if(error){
            response.send(ESAPI.encoder().encodeForJavascript(ESAPI.encoder().encodeForHTML(error)));
        }
        else{
            response.status(200).json(results);
        }
    });
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

    db.query("CALL get_user_id(?)", request.params.id,(error, results)=>{
        if(error){
            throw error;
        }
        else{
            response.status(200).json(results);
        }
    })

}



const uploadMusic = async (request, response) => {
    // Array which contain all the music
    const userName = 'ChaosArnhug' //request.user ; //DOIT ETRE DYNAMIQUE EN FONCTION DU USER CONNECTE CF token login

    try {
        const sftp = new sftpClient();

        sftp.connect(configFtp)
        .then(async () => {
            if (await sftp.exists(`/home/pi/Music/${userName}`) === 'd'){ // Check si l'utilisateur a un dossier perso
                for (const musicfile of request.files){
                    if (! await sftp.exists(`/home/pi/Music/${userName}/${musicfile.originalname}`)) { // Skip if file already exist
                        await sftp.put(musicfile.buffer, `/home/pi/Music/${userName}/${musicfile.originalname}`);
    
                        await db.query(`CALL post_new_music(? ,?)`, [userName, musicfile.originalname]) // add the newly added file into the DB
                        .catch(async error => {// if DB error, delete file and cancel upload
                            console.log(error)
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
    userInfos,
    uploadMusic
}