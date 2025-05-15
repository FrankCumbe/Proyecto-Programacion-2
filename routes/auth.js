// routes/auth.js
import express from 'express';
import { register, login } from '../controllers/authController.js';

const router = express.Router();

/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: "Register a new user"
 *     description: "Creates a new user in the system"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Juan Perez"
 *               username:
 *                 type: string
 *                 example: "juanperez"
 *               email:
 *                 type: string
 *                 example: "juan.perez@example.com"
 *               password:
 *                 type: string
 *                 example: "password123"
 *               role_id:
 *                 type: int
 *                 example: 1
 *     responses:
 *       201:
 *         description: "User created successfully"
 *       400:
 *         description: "Bad request, invalid data"
 */
router.post('/register', register);

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: "Login a user"
 *     description: "Logs in the user and returns a JWT token"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "juan.perez@example.com"
 *               password:
 *                 type: string
 *                 example: "password123"
 *     responses:
 *       200:
 *         description: "Login successful"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: "your-jwt-token"
 *       400:
 *         description: "Invalid credentials"
 */
router.post('/login', login);

export default router;