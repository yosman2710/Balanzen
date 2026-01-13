import express from 'express';
import { getUserByIdController, updateUserController } from '../controllers/usuario.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';
const router = express.Router();

router.get('/:userId', verifyToken, getUserByIdController);
router.put('/:userId', verifyToken, updateUserController);

export default router;