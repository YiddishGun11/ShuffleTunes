'use strict'

const fs = require('fs');

const directoryPath = '/users/HASHED_DIR/'

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


module.exports = getFiles
