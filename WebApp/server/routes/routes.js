'use strict'

const express = require('express');

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
router.use(rateLimit.limiter)

//GET REQUESTS

router.get('/', (req,res) =>
{
    res.json("hello bitches");
});

//get all user music files
//router.get('/userFiles', files.getFiles);

//get all user favorites musics
router.get('/favsongs', data.getFavSongs);

//get all playlists
router.get('/playlists', data.getPlaylists);

//get songs by playlists
router.get('/playlistsongs/:id', data.getSongsByPlaylist);

//get user musics
router.get('/songs', data.getSongs);


//get user infos
router.get('/user/:id',data.userInfos);

//is user authenticated
router.get('/isAuthenticated', data.isAuthenticated);

//POST REQUESTS

//play song
router.post('/pd', exec.playSong);

//stop song
router.post('/stopsong', exec.stopSong);

// send the music we want to upload to the server
router.post('/createplaylist', createPlaylistValidation.createPlaylistValidation, data.createPlaylist);

router.post('/newsong', data.insertSong);

router.post('/login',registerAndLoginValidation.registerAndLoginValidation, data.login);
router.post('/logout', data.logout);

router.post('/uploadMusic', multer, data.uploadMusic);


//DELETE 

router.delete('/playlist/:id', dataDelete.deletePlaylist);

router.delete('/deletesongplaylist/:id', dataDelete.deleteSongPlaylist);

router.delete('/deletefavsong/:id', data.deleteFavSong);

// register
router.post('/register',registerAndLoginValidation.registerAndLoginValidation, data.register);

//DELETE REQUESTS
//router.delete('/deletesong/:userid/:musicid', dataDelete.deleteSongById);


module.exports = router;
