'use strict'

const express = require('express');

//initialiser le router express
const router = express.Router();

//importer les requetes POST & GET
const data = require('../controllers/data');

const dataDelete = require('../controllers/delete');

// validation midelware
const registerValidation = require('../validation/registerValidation.js');
const createPlaylistValidation = require('../validation/createPlaylistValidation.js');

// secutity ùidelware
const rateLimit = require('../controllers/rateLimiter.js');

const exec = require('../controllers/exec')

// ROUTER USE
router.use(rateLimit.limiter)

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

//play song
router.post('/pd', exec.playSong);

// send the music we want to upload to the server
router.post('/createplaylist', createPlaylistValidation.createPlaylistValidation, data.createPlaylist);

router.post('/newsong', data.insertSong);


//DELETE 

router.delete('/deletesongplaylist/:id', dataDelete.deleteSongPlaylist);

// register
router.post('/register', registerValidation.registerValidation, data.register);

// register
router.post('/register', registerValidation.registerValidation, data.register);



module.exports = router;
