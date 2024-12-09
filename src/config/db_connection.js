const { Sequelize } = require('sequelize');
const dbConfig = require('./config')[process.env.NODE_ENV || 'local'];

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    dialectOptions: {
      allowPublicKeyRetrieval: true,
    },
    // logging: false,
  },
);

// Test the connection
(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log(`Connected to the "${process.env.NODE_ENV}" database.`);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = sequelize;
