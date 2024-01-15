import mysql from "mysql2";
import {config} from "dotenv";
config();

export const connection = mysql.createConnection({
    // host: process.env.DB_HOST,
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 10,
    queueLimit: 0,
});
// console.log('connection : ', connection)

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('MySQL is connected to', process.env.DB_NAME);
});
// module.exports =  connection ;


