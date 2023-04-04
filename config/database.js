const mysql = require('mysql2');

// create the connection to database
const dbPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Alvian17',
    database: 'merchant_service'
  });
  
module.exports = dbPool.promise();