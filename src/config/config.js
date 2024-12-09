const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: `.env.${process.env.NODE_ENV || 'local'}` }); // Load environment-specific .env

module.exports = {
  [process.env.NODE_ENV || 'local']: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    models: path.resolve(__dirname, '../models'),
    migrations: path.resolve(__dirname, '../migrations'),
    seeders: path.resolve(__dirname, '../seeders'),
  },
};
