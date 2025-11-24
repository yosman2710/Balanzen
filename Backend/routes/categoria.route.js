import { Router } from 'express';
import { verifyToken } from "../middleware/verifyToken.js";
import {
  createCategoriaController,
  deleteCategoriaController,
  getCategoriasByNameController,
  getCategoriaByIdController,
  getCategoriasByTipoController
} from '../controllers/categoria.controller.js';

const router = Router();

router.post('/', verifyToken, createCategoriaController);
router.delete('/:id_categoria', verifyToken, deleteCategoriaController);
router.get('/buscar', verifyToken, getCategoriasByNameController);
router.get('/:id_categoria', verifyToken, getCategoriaByIdController);
router.get('/', verifyToken, getCategoriasByTipoController);

export default router;
