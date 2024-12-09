const { DataTypes } = require('sequelize');

const commonAttributes = (overrides = {}) => ({
  is_deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    ...overrides.is_deleted,
  },
  created_by: {
    type: DataTypes.STRING,
    allowNull: true,
    ...overrides.created_by,
  },
  modified_by: {
    type: DataTypes.STRING,
    allowNull: true,
    ...overrides.modified_by,
  },
});

module.exports = commonAttributes;
