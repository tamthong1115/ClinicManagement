import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './src/routes/auth.routes';
import userRoutes from './src/routes/user.routes';
import ExpressHandler from './src/middlewares/ExpressHandler';

const app = express();
app.use(cookieParser());

// parse incoming JSON req
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// allow req from another port
app.use(
  cors({
    origin: process.env.FRONTEND_URL, // only accept url from frontend
    credentials: true,
  }),
);

const port = process.env.PORT || 8080;

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

app.use(ExpressHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
