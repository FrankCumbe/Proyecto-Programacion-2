import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sequelize from './models/index.js';
import authRoutes from './routes/auth.js';
import { swaggerDocs, swaggerUiSetup } from './docs/swagger.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', authRoutes);
app.use('/docs', swaggerDocs, swaggerUiSetup);

sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log('Backend en puerto ' + process.env.PORT);
  });
});