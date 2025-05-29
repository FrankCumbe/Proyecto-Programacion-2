import Customer from '../models/Customer.js';

export const createCustomer = async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }
    const customer = await Customer.create({ name, email });
    res.status(201).json(customer);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el cliente', error: error.message });
  }
};

export const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.findAll();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los clientes', error: error.message });
  }
};

export const getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.id);
    if (!customer) return res.status(404).json({ message: 'Cliente no encontrado' });
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el cliente', error: error.message });
  }
};

export const updateCustomer = async (req, res) => {
  try {
    const { name, email } = req.body;
    const customer = await Customer.findByPk(req.params.id);
    if (!customer) return res.status(404).json({ message: 'Cliente no encontrado' });

    customer.name = name || customer.name;
    customer.email = email || customer.email;

    await customer.save();
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el cliente', error: error.message });
  }
};

export const deleteCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.id);
    if (!customer) return res.status(404).json({ message: 'Cliente no encontrado' });

    await customer.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el cliente', error: error.message });
  }
};