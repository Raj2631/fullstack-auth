import express, { Application } from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
import connectDB from './config/db';
import cors from 'cors';
import { errorHandler, notFound } from './middlewares/errorMiddleware';

dotenv.config({ path: '../../.env' });

connectDB();

const app: Application = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/users', userRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
