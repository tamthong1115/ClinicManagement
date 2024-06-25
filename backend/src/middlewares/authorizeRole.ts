import { Response, NextFunction } from 'express';
import { IGetUserAuthInfoRequest } from '../../@types/custom-types';
import jwt from 'jsonwebtoken';
import prisma from '../utils/connectDB';

// Middleware to authenticate and authorize user based on role
export const authorizeRole = (allowedRoles: string[]) => {
  return async (
    req: IGetUserAuthInfoRequest,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const token =
        req.cookies.auth_token ||
        req.header('Authorization')?.replace('Bearer ', '');
      if (!token) {
        return res.status(401).json({ error: 'No token provided' });
      }

      // Verify token
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET_KEY as string,
      ) as jwt.JwtPayload;
      if (!decoded.userId) {
        return res.status(401).json({ error: 'Invalid token' });
      }

      const user = await prisma.user.findUnique({
        where: { id: decoded.userId },
      });

      console.log(decoded.userId);

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // If 'USER' is in allowedRoles, any authenticated user is authorized
      if (allowedRoles.includes('USER') || allowedRoles.includes(user.role)) {
        // User is authenticated and authorized
        req.user = user;
        next();
      } else {
        return res.status(403).json({ error: 'Access denied' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
};
