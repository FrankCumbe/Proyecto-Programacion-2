import { DataTypes } from 'sequelize';
import sequelize from './index.js';
import Category from './Category.js';
import Supply from './Supplier.js';

const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: 'El nombre del producto no puede estar vacío' }
    }
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      isFloat: { msg: 'El precio debe ser un número válido' },
      min: 0
    }
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: { msg: 'El stock debe ser un número entero' },
      min: 0
    }
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Category,
      key: 'id'
    }
  },
  supplier_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Supply,
      key: 'id'
    }
  }
}, {
  tableName: 'products',
  timestamps: false
});

Product.belongsTo(Category, { foreignKey: 'category_id', as: 'category' });
Product.belongsTo(Supply, { foreignKey: 'supplier_id', as: 'supplier' });

export default Product;