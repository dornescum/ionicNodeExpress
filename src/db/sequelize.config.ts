// import mysql from "mysql2";
import {config} from "dotenv";

config();
import {Sequelize} from 'sequelize';

// const database =process.env.DB_NAME as string;
const database =process.env.DB_NAME as string;
const user =process.env.DB_USER as string;
const password =process.env.DB_PASSWORD as string;

const sequelize = new Sequelize(database, user, password, {
    // host: process.env.DB_HOST, // why ??
    host: 'localhost',
    dialect: 'mysql'
});

async function initializeDatabase() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

initializeDatabase();
export default sequelize;
