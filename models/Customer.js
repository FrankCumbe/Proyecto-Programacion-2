import { DataTypes } from 'sequelize';
import sequelize from './index.js';

const Customer = sequelize.define('Customer', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
}, {
  tableName: 'customers',
  timestamps: false
});

export default Customer;