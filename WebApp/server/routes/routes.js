'use strict'

const express = require('express');
//initialiser le router express
const router = express.Router();

const data = require('../controllers/fileList');

router.get('/', (req,res) =>
{
    res.json("hello bitches");
});

router.get('/userFiles', data.getFiles);


module.exports = router;