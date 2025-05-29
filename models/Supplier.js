import { DataTypes } from 'sequelize';
import sequelize from './index.js';

const Supplier = sequelize.define('Supplier', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'suppliers',
  timestamps: false
});

export default Supplier;