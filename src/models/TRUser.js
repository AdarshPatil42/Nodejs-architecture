const { DataTypes } = require('sequelize');
const sequelize = require('../config/db_connection');
const commonAttributes = require('./utils/commonAttributes');
const { enums } = require('../utils/model enum/constants.json');
const MSTDepartment = require('./MSTDepartment');
const TRRole = require('./TRRole');

const TRUser = sequelize.define('tr_users', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mobile_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  department_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: MSTDepartment,
      key: 'id',
    },
  },
  role_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: TRRole,
      key: 'id',
    },
  },
  designation: {
    type: DataTypes.ENUM(...Object.values(enums.designation)),
    allowNull: true,
  },
  ...commonAttributes(),
  // ...commonAttributes({
  //     created_by: {
  //         allowNull: false, //example Override allowNull for created_by
  //     },
  // }),
});

module.exports = TRUser;
