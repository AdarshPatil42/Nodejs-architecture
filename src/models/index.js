const sequelize = require('../config/db_connection');
const MSTDepartment = require('./MSTDepartment');
const TRRole = require('./TRRole');
const TRSession = require('./TRSession');
const TRUser = require('./TRUser');

MSTDepartment.hasMany(TRUser, { foreignKey: 'department_id', as: 'users' });
TRUser.belongsTo(MSTDepartment, {
  foreignKey: 'department_id',
  as: 'department',
});

TRRole.hasMany(TRUser, { foreignKey: 'role_id', as: 'users' });
TRUser.belongsTo(TRRole, { foreignKey: 'role_id', as: 'role' });

// sync db
// sequelize.sync();

module.exports = { MSTDepartment, TRRole, TRUser, TRSession };
