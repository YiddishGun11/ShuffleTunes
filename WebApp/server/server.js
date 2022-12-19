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
    "01ca072d04c662013153391795d64377017f15e0abbcd1b314809ab8a6c07fb26246cd8a3482e1d0bf2a9c1c3e41c05e08d877309d0af868d0f700eb282d321a"
))
app.use(cors({origin: "http://127.0.0.1:3000", credentials: true}));
//utiliser le router nodejs
app.use('/',Route);

//port serveur nodejs
app.listen(5000, ()=>{console.log("server running on port 5000")})

module.exports = app