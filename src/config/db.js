const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();

const connectDb = mysql.createConnection({
    user:process.env.USER,
    password:process.env.PASSWORD,
    host: process.env.HOST,
    port: process.env.DB_PORT, 
    database: process.env.DATABASE,
    
});

module.exports = connectDb;
