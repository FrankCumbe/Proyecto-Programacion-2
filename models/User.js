import { DataTypes } from 'sequelize';
import sequelize from './index.js';
import Role from './Role.js';

const User = sequelize.define('User', {
  name: DataTypes.STRING,
  username: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  password: DataTypes.STRING,
  role_id: DataTypes.INTEGER
}, {
  tableName: 'users',
  timestamps: false
});

User.belongsTo(Role, { foreignKey: 'role_id' });

export default User;