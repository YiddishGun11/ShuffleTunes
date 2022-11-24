'use strict'
const express = require('express');
const path = require('path');
const app = express();

//initialiser le router express
const router = express.Router();


const exec = require('../controllers/exec')


//importer les requetes POST & GET
const data = require('../controllers/data');

const dataDelete = require('../controllers/delete');

// validation midelware
const registerValidation = require('../validation/registerValidation.js');
const createPlaylistValidation = require('../validation/createPlaylistValidation.js');

// secutity ùidelware
const rateLimit = require('../controllers/rateLimiter.js');


// ROUTER USE
router.use(express.static(path.join(__dirname, '../../client/build')));
router.use(rateLimit.limiter)

//GET REQUESTS

// router.get('/', (req,res) =>
// {
//     res.json("hello bitches");
// });
router.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
  });


//get all playlists
router.get('/playlists', data.getPlaylists);

//get songs by playlists
router.get('/playlistsongs/:id', data.getSongsByPlaylist);

//get user musics
router.get('/songs/:id', data.getSongs);

//play song
router.post('/pd', exec.playSong);

//get user infos
router.get('/user/:id',data.userInfos);


//POST REQUESTS

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