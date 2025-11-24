import { Router } from 'express';
import { getDashboardData } from '../controllers/datosDashboard.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = Router();

router.get('/dashboard', verifyToken, getDashboardData);

export default router;
