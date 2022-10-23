'use strict'

const express = require('express');

//initialiser le router express
const router = express.Router();

const files = require('../controllers/fileList');

//importer les requetes POST & GET
const data = require('../controllers/data');

// validation midelware
const registerValidation = require('../validation/registerValidation.js');

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

// send the music we want to upload to the server
router.post('/createplaylist', data.createPlaylist);

// register
router.post('/register', registerValidation.registerValidation, data.register);



module.exports = router;