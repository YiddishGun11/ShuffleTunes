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
const registerAndLoginValidation = require('../validation/registerAndLoginValidation.js');
const createPlaylistValidation = require('../validation/createPlaylistValidation.js');

// multer midelware
const multer = require('../controllers/multer');

// secutity midelware
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
router.get('/songs', data.getSongs);


//play song
router.post('/pd', exec.playSong);

//get user infos
router.get('/user/:id',data.userInfos);

//is user authenticated
router.get('/isAuthenticated', data.isAuthenticated);

//POST REQUESTS

// send the music we want to upload to the server
router.post('/createplaylist', createPlaylistValidation.createPlaylistValidation, data.createPlaylist);

router.post('/newsong', data.insertSong);

router.post('/login',registerAndLoginValidation.registerAndLoginValidation, data.login);
router.post('/logout', data.logout);

router.post('/uploadMusic', multer, data.uploadMusic);


//DELETE 

router.delete('/playlist/:id', dataDelete.deletePlaylist);

router.delete('/deletesongplaylist/:id', dataDelete.deleteSongPlaylist);

// register
router.post('/register',registerAndLoginValidation.registerAndLoginValidation, data.register);




module.exports = router;