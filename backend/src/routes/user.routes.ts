import express from 'express';
import { authorizeRole } from '../middlewares/authorizeRole';
import { getCurrentUser } from '../controllers/user.controllers';

const router = express.Router();

router.get(
  '/me',
  authorizeRole(['CUSTOMER', 'DENTIST', 'CLINIC_OWNER']),
  getCurrentUser,
);

export default router;