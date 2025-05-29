import { DataTypes } from 'sequelize';
import sequelize from './index.js';
import Order from './Order.js';
import Product from './Product.js';

const OrderDetail = sequelize.define('OrderDetail', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  order_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  quantity_total: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  total: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  tableName: 'order_details',
  timestamps: false
});

Order.belongsToMany(Product, { through: OrderDetail, foreignKey: 'order_id' });
Product.belongsToMany(Order, { through: OrderDetail, foreignKey: 'product_id' });

export default OrderDetail;