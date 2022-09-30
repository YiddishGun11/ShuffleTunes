'use strict'

const fs = require('fs');

//path dynamique à venir en fonction du compte utilisateur
const directoryPath = 'C:/Users/edoua/Desktop/ShuffleTunes/WebApp/server/musicFiles'


const getFiles = (request, response) =>{

    fs.readdir( directoryPath, (error, files)=>{
        if(error){
            throw(error);
            
        }
        else{
            response.status(200).json(files);
        }
    })
}


module.exports = {
    getFiles
}