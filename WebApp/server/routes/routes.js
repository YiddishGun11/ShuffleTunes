'use strict'

const express = require('express');

//initialiser le router express
const router = express.Router();

//importer les requetes POST & GET
const data = require('../controllers/data');

const dataDelete = require('../controllers/delete');


//GET REQUESTS

router.get('/', (req,res) =>
{
    res.json("hello bitches");
});


//get all playlists
router.get('/playlists', data.getPlaylists);

//get songs by playlists
router.get('/playlistsongs/:id', data.getSongsByPlaylist);

//get user musics
router.get('/songs/:id', data.getSongs);


//POST REQUESTS

router.post('/createplaylist', data.createPlaylist);

router.post('/newsong', data.insertSong);


//DELETE 

router.delete('/deletesongplaylist/:id', dataDelete.deleteSongPlaylist);



module.exports = router;