import Order from '../models/Order.js';
import OrderDetail from '../models/OrderDetails.js';
import Product from '../models/Product.js';

export const createOrder = async (req, res) => {
  const { customer_id, total, status, order_date, payment_method, items } = req.body;

  try {
    const newOrder = await Order.create({
      customer_id,
      total,
      status,
      order_date,
      payment_method
    });

    const orderDetails = items.map(item => ({
      order_id: newOrder.id,
      product_id: item.product_id,
      quantity_total: item.quantity_total,
      total: item.total
    }));

    await OrderDetail.bulkCreate(orderDetails);

    res.status(201).json({ mensaje: 'Venta registrada exitosamente', order: newOrder });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear la venta', error });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: {
        model: Product,
        through: {
          attributes: ['quantity_total', 'total']
        },
        attributes: ['id', 'name']
      }
    });

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener las ventas', error });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id, {
      include: {
        model: Product,
        through: {
          attributes: ['quantity_total', 'total']
        },
        attributes: ['id', 'name']
      }
    });

    if (!order) return res.status(404).json({ mensaje: 'Venta no encontrada' });

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener la venta', error });
  }
};