const mysql = require('mysql')
const { Pool } = require('pg')
require('dotenv').config()

const {
    DATABASE,
    DATABASE_USER,
    DATABASE_PASSWORD,
    DATABASE_HOST,
    DATABASE_PORT,
} = process.env;

var connect = new Pool({
    user: DATABASE_USER,
    host: DATABASE_HOST,
    database: DATABASE,
    password: DATABASE_PASSWORD,
    port: DATABASE_PORT,
});

connect.connect(function (err) {
    if (err) throw err;
    console.log('Connected');
})

module.exports = connect