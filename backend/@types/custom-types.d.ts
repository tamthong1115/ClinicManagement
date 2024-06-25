import { Request } from 'express';

type UserModel = {
  id: string;
  username: string;
  first_name?: string;
  last_name?: string;
  role: string;
};

// Extend the Express Request interface
export interface IGetUserAuthInfoRequest extends Request {
  user?: UserModel;
}
