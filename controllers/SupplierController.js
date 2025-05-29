import Supplier from '../models/Supplier.js';

export const createSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.create(req.body);
    res.status(201).json(supplier);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear el proveedor', error });
  }
};

export const getAllSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.findAll();
    res.status(200).json(suppliers);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los proveedores', error });
  }
};

export const getSupplierById = async (req, res) => {
  try {
    const supplier = await Supplier.findByPk(req.params.id);
    if (!supplier) return res.status(404).json({ mensaje: 'Proveedor no encontrado' });
    res.status(200).json(supplier);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener el proveedor', error });
  }
};

export const updateSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.findByPk(req.params.id);
    if (!supplier) return res.status(404).json({ mensaje: 'Proveedor no encontrado' });

    await supplier.update(req.body);
    res.status(200).json(supplier);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar el proveedor', error });
  }
};

export const deleteSupplier = async (req, res) => {
  try {
    const supplier = await Supplier.findByPk(req.params.id);
    if (!supplier) return res.status(404).json({ mensaje: 'Proveedor no encontrado' });

    await supplier.destroy();
    res.status(200).json({ mensaje: 'Proveedor eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar el proveedor', error });
  }
};