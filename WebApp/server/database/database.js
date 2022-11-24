const mysql = require('mysql2')

//mysql connexion
//using DOTENV to avoid sensible data in github repo
const connexion = mysql.createConnection({
    host: '78.129.32.10',
    password: 'Bv87VuDDj|fD',
    database: 'ShuffleTunes',
    user : 'ShuffleTunes'
})

connexion.connect(function(err) {
    if (err) {
        return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
});

module.exports = connexion;