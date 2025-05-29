import Product from '../models/Product.js';
import Category from '../models/Category.js';
import Supply from '../models/Supplier.js';

export const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear el producto', error });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [
        { model: Category, as: 'category', attributes: ['id', 'name'] },
        { model: Supply, as: 'supplier', attributes: ['id', 'name'] }
      ]
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los productos', error });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [
        { model: Category, as: 'category', attributes: ['id', 'name'] },
        { model: Supply, as: 'supplier', attributes: ['id', 'name'] }
      ]
    });
    if (!product) return res.status(404).json({ mensaje: 'Producto no encontrado' });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener el producto', error });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ mensaje: 'Producto no encontrado' });

    await product.update(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar el producto', error });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ mensaje: 'Producto no encontrado' });

    await product.destroy();
    res.status(200).json({ mensaje: 'Producto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar el producto', error });
  }
};