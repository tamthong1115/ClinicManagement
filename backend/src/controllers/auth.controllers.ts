import { Request, Response } from 'express';
import prisma from '../utils/connectDB';
import 'dotenv/config';
import bcrypt from 'bcryptjs';
import generateToken from '../utils/generateToken';
import { IGetUserAuthInfoRequest } from '../../@types/custom-types';

export const register = async (req: Request, res: Response) => {
  try {
    const { username, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }

    let user = await prisma.user.findFirst({
      where: {
        username,
      },
    });

    if (user) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const saltRound = 10;
    const hashedPassword = bcrypt.hashSync(password, saltRound);

    user = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
      },
    });

    res.status(201).json({ user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const user = await prisma.user.findFirst({
      where: {
        username,
      },
    });

    if (!user) {
      return res.status(400).json({ error: 'Cannot find account' });
    }

    const isMatch = bcrypt.compareSync(password, user.password);

    if (!isMatch) {
      return res
        .status(400)
        .json({ error: 'Your username or password is incorrect' });
    }

    const token = generateToken(res, user.id);

    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getValidateToken = async (
  req: IGetUserAuthInfoRequest,
  res: Response,
) => {
  try {
    res.status(200).json({ user: req.user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const postLogout = async (req: Request, res: Response) => {
  try {
    res.cookie('auth_token', '', { expires: new Date(0) });

    res.status(200).json({ message: 'Logout OK' });
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};
