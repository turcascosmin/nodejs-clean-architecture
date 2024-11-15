import mongoose from 'mongoose';
import { logger } from '../logger';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  await mongoose.connect(process.env.MONGODB_URI || '');
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  db.once('open', () => {
    logger.info('Connected to MongoDB');
  });
};

export default connectDB;
