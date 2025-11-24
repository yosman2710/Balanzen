import { Router } from 'express';
import { verifyToken } from '../middleware/verifyToken.js';
import {
  createPresupuestoController,
  deletePresupuestoController,
  updatePresupuestoController,
  getPresupuestosController,
  getPresupuestosByPeriodoController,
  getPresupuestosByCategoriaController
} from '../controllers/presupuesto.controller.js';

const router = Router();

// Crear presupuesto
router.post('/', verifyToken, createPresupuestoController);

// Eliminar
router.delete('/:id_presupuesto', verifyToken, deletePresupuestoController);

// Actualizar
router.put('/:id_presupuesto', verifyToken, updatePresupuestoController);

// Listar todos (usuario)
router.get('/', verifyToken, getPresupuestosController);

// Listar por periodo
router.get('/periodo', verifyToken, getPresupuestosByPeriodoController); // ?mes=MM&anio=YYYY

// Listar por categoría
router.get('/categoria/:id_categoria', verifyToken, getPresupuestosByCategoriaController);

export default router;
