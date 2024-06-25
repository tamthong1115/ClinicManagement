import express from 'express';
import {
  getValidateToken,
  login,
  postLogout,
  register,
} from '../controllers/auth.controllers';
import {
  loginValidator,
  registerValidator,
} from './validation/schemas/authSchemas';
import { authorizeRole } from '../middlewares/authorizeRole';

const router = express.Router();

router.post('/register', registerValidator, register);

router.post('/login', loginValidator, login);

router.get('/validate-token', authorizeRole(['USER']), getValidateToken);

// sign out
router.post('/logout', postLogout);

export default router;
