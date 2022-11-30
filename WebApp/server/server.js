const cors = require('cors');

const express = require('express');

const Route = require('./routes/routes');

//connexion to db
const db = require('./database/database');
db.connect();

const app = express();

app.use(express.json());

app.use(cors());

//utiliser le router nodejs
app.use('/',Route);

//port serveur nodejs
app.listen(5000, ()=>{console.log("server running on port 5000")})

module.exports = app