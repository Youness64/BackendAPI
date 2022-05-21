const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config(); // Initialisation des variables d'environnements



const connection = mysql.createConnection({

    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE

});


module.exports = connection;

