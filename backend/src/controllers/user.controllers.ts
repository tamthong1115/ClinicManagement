import { Request, Response } from 'express';
import prisma from '../utils/connectDB';
import { IGetUserAuthInfoRequest } from '../../@types/custom-types';

export const getCurrentUser = async (
  req: IGetUserAuthInfoRequest,
  res: Response,
) => {
  const userId = req.user.user_id;

  try {
    const user = await prisma.user.findFirst({
      where: { user_id: userId },
      select: {
        user_id: true,
        first_name: true,
        last_name: true,
        role: true,
      },
    });

    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
