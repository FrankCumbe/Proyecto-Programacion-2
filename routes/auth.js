// routes/auth.js
import express from 'express';
import { login } from '../controllers/authController.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: API para manejo de la autenticación
 */

/**
 * @swagger
 * /api/login:
 *   post:
 *     tags: [Auth]
 *     summary: Autenticar usuario
 *     description: Inicia sesión y devuelve un token JWT válido por 1 hora
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserCredentials'
 *     responses:
 *       200:
 *         description: Autenticación exitosa
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthToken'
 *       400:
 *         description: Credenciales inválidas
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Error del servidor
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     UserCredentials:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           example: usuario@ejemplo.com
 *           description: Correo electrónico registrado
 *         password:
 *           type: string
 *           format: password
 *           example: "MiClaveSegura123"
 *           minLength: 8
 *           description: Contraseña (mínimo 8 caracteres)
 * 
 *     AuthToken:
 *       type: object
 *       properties:
 *         token:
 *           type: string
 *           example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *           description: Token JWT para autenticación
 *         user:
 *           $ref: '#/components/schemas/UserProfile'
 * 
 *     UserProfile:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: "Juan Pérez"
 *         email:
 *           type: string
 *           example: "usuario@ejemplo.com"
 * 
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 *           example: "Credenciales inválidas"
 *         details:
 *           type: string
 *           example: "El correo o contraseña son incorrectos"
 */
router.post('/login', login);

export default router;