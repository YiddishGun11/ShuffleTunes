'use strict'

const fs = require('fs');

//const directoryPath = '/users/HASHED_DIR/'

const directoryPath = 'C:/Users/arnau/Desktop/Ephec/ShuffleTunes/WebApp/server/musicFiles'


const getFiles = (request, response) =>{

    fs.readdir( directoryPath, (error, files)=>{
        if(error){
            console.log(error);
            
        }
        else{
            response.status(200).json(files);
        }
    })
}


module.exports = {
    getFiles
}
