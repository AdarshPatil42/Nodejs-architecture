const { DataTypes } = require('sequelize');
const sequelize = require('../config/db_connection');
const commonAttributes = require('./utils/commonAttributes');
const TRUser = require('./TRUser');

const TRSession = sequelize.define('tr_sessions', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: TRUser,
      key: 'id',
    },
    validate: {
      notEmpty: { msg: 'User ID is required' },
    },
  },
  token: {
    type: DataTypes.STRING(1000),
    allowNull: true,
    defaultValue: null,
  },
  ...commonAttributes(),
});

module.exports = TRSession;
