import express from 'express';
import { createOrder, getAllOrders, getOrderById } from '../controllers/OrderController.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Ventas
 *   description: Endpoints para registrar y consultar ventas
 */

/**
 * @swagger
 * /api/orders:
 *   post:
 *     summary: Registrar una venta
 *     tags: [Ventas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: integer
 *                 example: 1
 *               total:
 *                 type: number
 *                 example: 120.50
 *               status:
 *                 type: string
 *                 example: "pagado"
 *               order_date:
 *                 type: string
 *                 format: date
 *                 example: "2025-05-28"
 *               payment_method:
 *                 type: string
 *                 example: "efectivo"
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     product_id:
 *                       type: integer
 *                       example: 3
 *                     quantity_total:
 *                       type: integer
 *                       example: 2
 *                     total:
 *                       type: number
 *                       example: 20.00
 *     responses:
 *       201:
 *         description: Venta registrada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *                   example: Venta registrada exitosamente
 *                 order:
 *                   type: object
 *       500:
 *         description: Error al crear la venta
 */

/**
 * @swagger
 * /api/orders:
 *   get:
 *     summary: Obtener todas las ventas
 *     tags: [Ventas]
 *     responses:
 *       200:
 *         description: Lista de ventas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       500:
 *         description: Error al obtener las ventas
 */

/**
 * @swagger
 * /api/orders/{id}:
 *   get:
 *     summary: Obtener una venta por ID
 *     tags: [Ventas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la venta
 *         example: 1
 *     responses:
 *       200:
 *         description: Venta encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       404:
 *         description: Venta no encontrada
 *       500:
 *         description: Error al obtener la venta
 */
router.post('/', createOrder);
router.get('/', getAllOrders);
router.get('/:id', getOrderById);

export default router;