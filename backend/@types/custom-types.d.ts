import { Request } from 'express';

type UserModel = {
  user_id: string;
  first_name?: string;
  last_name?: string;
  role: string;
};

// Extend the Express Request interface
export interface IGetUserAuthInfoRequest extends Request {
  user?: UserModel;
}
