'use strict'

const express = require('express');

//initialiser le router express
const router = express.Router();

const files = require('../controllers/fileList');

//importer les requetes POST & GET
const data = require('../controllers/data');


//GET REQUESTS

router.get('/', (req,res) =>
{
    res.json("hello bitches");
});

//get all user music files
router.get('/userFiles', files.getFiles);

//get all user favorites musics
router.get('/favsongs', data.getFavSongs);

//get all playlists
router.get('/playlists', data.getPlaylists);


//POST REQUESTS

router.post('/createplaylist', data.createPlaylist);

router.post('/newsong', data.insertSong);



module.exports = router;