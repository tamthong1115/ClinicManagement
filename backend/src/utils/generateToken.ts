import { Response } from 'express';
import jwt from 'jsonwebtoken';

const generateToken = (
  res: Response,
  userId: string,
  expiresIn: string = process.env.TOKEN_EXPIRATION || '1d',
): string => {
  try {
    const token = jwt.sign(
      { userId: userId },
      process.env.JWT_SECRET_KEY as string,
      { expiresIn: expiresIn, algorithm: 'HS256' },
    );

    res.cookie('auth_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // cookie will only be set in https in production
      maxAge: 86400000, // 24 hours
      sameSite: 'strict', // Strictly prevent sending cookies along with cross-site requests
    });

    return token;
  } catch (error) {
    console.error('Error generating token:', error);
    throw new Error('Failed to generate token');
  }
};

export default generateToken;
