'use strict'

const express = require('express');

//initialiser le router express
const router = express.Router();

//importer les requetes POST & GET
const data = require('../controllers/data');

const dataDelete = require('../controllers/delete');

// validation midelware
const registerValidation = require('../validation/registerValidation.js');

// secutity ùidelware
const rateLimit = require('../controllers/rateLimiter.js');


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

//get user infos
router.get('/user/:id',data.userInfos);


//POST REQUESTS

// send the music we want to upload to the server
router.post('/createplaylist', data.createPlaylist);

router.post('/newsong', data.insertSong);


//DELETE 

router.delete('/deletesongplaylist/:id', dataDelete.deleteSongPlaylist);

// register
router.post('/register', registerValidation.registerValidation, data.register);

// register
router.post('/register', registerValidation.registerValidation, data.register);



module.exports = router;