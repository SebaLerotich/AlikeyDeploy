const mysql2 = require('mysql2');

const database = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Alibaba10*',
    port: '3306',
    database: 'alikey',
});

module.exports = database;