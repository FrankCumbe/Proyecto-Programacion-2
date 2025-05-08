import User from '../models/User.js';
import Role from '../models/Role.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  const { name, username, email, password, role_id } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  try {
    await User.create({ name, username, email, password: hashed, role_id });
    res.status(201).json({ message: 'Usuario creado' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email }, include: Role });
  if (!user) return res.status(404).json({ error: 'No encontrado' });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ error: 'Contraseña incorrecta' });

  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.Role.name },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.json({ token, user: { name: user.name, role: user.Role.name } });
};