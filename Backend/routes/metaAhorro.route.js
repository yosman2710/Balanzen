import { Router } from "express";
import { verifyToken } from "../middleware/verifyToken.js";

import {
    findMetaAhorroByIdController, findMetasAhorroByUsuarioController,
    updateMetaAhorroController, createMetaAhorroController, deleteMetaAhorroController
} from "../controllers/metaAhorro.controller.js";

const router = Router();

// Crear meta
router.post('/', verifyToken, createMetaAhorroController);

// Eliminar
router.delete('/:id_meta', verifyToken, deleteMetaAhorroController);

// Actualizar
router.put('/:id_meta', verifyToken, updateMetaAhorroController);

// Listar todos (usuario)
router.get('/', verifyToken, findMetasAhorroByUsuarioController);


// Listar por categoría
router.get('/categoria/:id_categoria', verifyToken, findMetaAhorroByIdController);

export default router;
