import express from 'express';
import multer from 'multer';
import { body } from 'express-validator';
import { authorizeRole } from '../middlewares/authorizeRole';
import {
  createClinicOwner,
  deleteClinicOwner,
  updateClinicOwner,
} from '../controllers/clinicOwner.controllers';

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
});

// api/my-hotels
const MAX_IMG = 6;

router.post(
  '/',
  authorizeRole(['CLINIC_OWNER', 'SYSTEM_ADMIN']),
  [
    body('name').isString().notEmpty(),
    body('email').isEmail().notEmpty(),
    body('password').isString().notEmpty(),
    body('phone_number').isString().notEmpty(),
    body('address').isString().notEmpty(),
    body('open_time').isString().notEmpty(),
    body('close_time').isString().notEmpty(),
    body('time_slot').isString().notEmpty(),
    body('latitude').isNumeric().notEmpty(),
    body('longitude').isNumeric().notEmpty(),
  ],
  upload.array('imageFiles', MAX_IMG),
  createClinicOwner,
);

router.put(
  '/:id',
  authorizeRole(['CLINIC_OWNER', 'SYSTEM_ADMIN']),
  upload.array('imageFiles', MAX_IMG),
  updateClinicOwner,
);

router.delete(
  '/:id',
  authorizeRole(['CLINIC_OWNER', 'SYSTEM_ADMIN']),
  deleteClinicOwner,
);
export default router;
