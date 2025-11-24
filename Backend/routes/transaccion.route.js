// routes/transaccion.route.js
import express from 'express';
import {
    getTransaccionById,
    createTransaccion,
    deleteTransaccion,
    getTransaccionesByCategoriaNombre,
    getTransaccionesByCategoriaTipo,
    getTransaccionesByNombre,
    updateTransaccion
} from '../controllers/transaccion.controller.js';

const router = express.Router();

router.get('/:id', getTransaccionById);
router.post('/', createTransaccion);
router.delete('/:id', deleteTransaccion);
router.get('/categoria', getTransaccionesByCategoriaNombre);   // ?nombre_categoria=
router.get('/tipo', getTransaccionesByCategoriaTipo);         // ?tipo=
router.get('/nombre', getTransaccionesByNombre);              // ?nombre_transaccion=
router.put('/:id', updateTransaccion);

export default router;
