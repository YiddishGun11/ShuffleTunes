'use strict'

const cors = require('cors');
const express = require('express');
const app = express();

const Route = require('./routes/routes');


app.use(express.json());

app.use(cors());

//utiliser le router nodejs
app.use('/',Route);

//port serveur nodejs
app.listen(5000, ()=>{console.log("server running on port 5000")})