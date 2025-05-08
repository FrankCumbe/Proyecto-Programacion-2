import { DataTypes } from 'sequelize';
import sequelize from './index.js';

const Role = sequelize.define('Role', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'roles',
  timestamps: false
});

export default Role;