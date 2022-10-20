const db = require('../database/database')

const deleteSongPlaylist = (request, response) =>{

    let sql = "CALL delete_song_playlist (?)"
    db.query(sql, request.params.id, (error, results)=>{
        if(error){
            throw error;
        }

        else{
            response.status(200).json(results);
        }
    })
}

module.exports = {
    deleteSongPlaylist
}