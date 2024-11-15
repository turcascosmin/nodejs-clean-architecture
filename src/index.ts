import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import { carRoutes } from './interfaces/routes/carRoutes';
import { errorHandler } from './interfaces/middleware/errorHandler';
import { logger } from './infrastructure/logger';
import { setupSwagger } from './interfaces/swagger';
import connectDB from './infrastructure/database/mongodb';
import cors from 'cors';

const app = express();

connectDB();
app.use(
  cors({
    origin: 'http://localhost:3001',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
  }),
);
app.use(express.json());
app.use('/api', carRoutes);
app.use(errorHandler);

setupSwagger(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
