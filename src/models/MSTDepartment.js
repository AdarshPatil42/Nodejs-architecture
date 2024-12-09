const { DataTypes } = require('sequelize');
const sequelize = require('../config/db_connection');
const commonAttributes = require('./utils/commonAttributes');

const MSTDepartment = sequelize.define('mst_departments', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  deparment_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ...commonAttributes(),
});

module.exports = MSTDepartment;
