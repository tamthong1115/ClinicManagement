import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './src/routes/auth.routes';
import userRoutes from './src/routes/user.routes';
import clinicOwner from './src/routes/clinicOwner.routes';
import ExpressHandler from './src/middlewares/ExpressHandler';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

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
app.use('/api/clinic-owner', clinicOwner);

app.use(ExpressHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
