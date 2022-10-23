'use strict'

const { response } = require('express');
const hashed = require('./hashed.js');
const db = require('../database/database');
const { validationResult } = require('express-validator');

//GET 

const getFavSongs = (request, response) =>{
    db.query('SELECT * FROM tb_Favoris', (error, results)=>{
        if(error){
            throw error;
        }
        else{
            response.status(200).json(results);
        }
    })
}

const getPlaylists = (request, response) =>{
    db.query('SELECT * FROM tb_Playlists', (error, results)=>{
        if(error){
            throw error
        }
        else{
            response.status(200).json(results)
        }
    })
}


//POST

const createPlaylist = (request, response) =>{
    let data = request.body;

    db.query("INSERT INTO tb_Playlists SET ?", [data], (error,results)=>{
        if(error){
            response.send(error);
        }
        else{
            response.status(200).json(results);
        }
    });
}

const register = (request, response, next) => {
    try {
        const errors = validationResult(request);

        if (!errors.isEmpty()) {
            return response.status(400).json({
                success : false,
                errors : errors.array()
            })
        }

        db.query(`CALL register(?, ?)`, [request.body.pseudo, hashed.hash512String(request.body.password)], (error, results) => {
            if (error) {
                response.send(error);
            } 
            else {
                results.forEach(element => {
                    if (element.constructor == Array){
                        response.status(200).json(element[0]);
                    }
                })
            }
        })
    }

    catch (error) {
        console.log(error);
        next(error);
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
    getFavSongs,
    getPlaylists,
    createPlaylist,
    register
}