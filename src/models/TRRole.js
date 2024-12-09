const { DataTypes } = require('sequelize');
const sequelize = require('../config/db_connection');
const commonAttributes = require('./utils/commonAttributes');

const TRRole = sequelize.define('tr_roles', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  role_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ...commonAttributes(),
});

module.exports = TRRole;
