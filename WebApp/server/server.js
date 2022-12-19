const cors = require('cors');
const cookieParser = require('cookie-parser');
const express = require('express');

const Route = require('./routes/routes');

//connexion to db
const db = require('./database/database');
db.connect();

const app = express();

app.use(express.json());

app.use(cookieParser(secret=
    process.env.COOKIE_SECRET
))
app.use(cors({origin: "http://127.0.0.1:3000", credentials: true}));
//utiliser le router nodejs
app.use('/',Route);

//port serveur nodejs
app.listen(5000, ()=>{console.log("server running on port 5000")})

module.exports = app