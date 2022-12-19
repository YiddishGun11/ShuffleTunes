const db = require('../database/database')

const deleteSongPlaylist = (request, response) =>{

    let sql = "CALL delete_song_playlist (?)"
    db.query(sql, request.params.id)
    .then((results) => {
        return response.status(200).json(results);
    })
    .catch(() => {
        return response.status(400);
    })
}


const deletePlaylist = (request, response) =>{

    db.query("CALL delete_playlist(?)", request.params.id)
    .then((results) => {
        return response.status(200).json(results);
    })
    .catch(() => {
        return response.status(400);
    })
}

module.exports = {
    deleteSongPlaylist,
    deletePlaylist,
}