import {
    getMetaAhorroDashboardService, createMetaAhorroService, deleteMetaAhorroService,
    findMetaAhorroByIdService, findMetasAhorroByUsuarioService, updateMetaAhorroService
} from '../services/metaAhorro.service.js';

export const getMetaAhorroDashboardController = async (req, res) => {
    try {
        const userId = req.user.userId;
        const meta = await getMetaAhorroDashboardService(userId);
        if (!meta) {
            return res.status(404).json({ message: 'Meta no encontrada' });
        }
        res.json(meta);
    } catch (error) {
        console.error('Error al obtener la meta:', error);
        res.status(500).json({ message: 'Error al obtener la meta' });
    }
};

export const createMetaAhorroController = async (req, res) => {
    try {
        const userId = req.user.userId;
        const { nombre_meta, descripcion_meta, monto_objetivo } = req.body;
        const id = await createMetaAhorroService(userId, nombre_meta, descripcion_meta, monto_objetivo);
        res.status(201).json({ id });
    } catch (error) {
        console.error('Error al crear la meta:', error);
        res.status(500).json({ message: 'Error al crear la meta: ' + error });
    }
};

export const deleteMetaAhorroController = async (req, res) => {
    try {
        const userId = req.user.userId;
        const { id_meta } = req.params;
        await deleteMetaAhorroService(userId, id_meta);
        res.json({ message: 'Meta eliminada' });
    } catch (error) {
        console.error('Error al eliminar la meta:', error);
        res.status(500).json({ message: 'Error al eliminar la meta' });
    }
};

export const findMetaAhorroByIdController = async (req, res) => {
    try {
        const userId = req.user.userId;
        const { id_meta } = req.params;
        const meta = await findMetaAhorroByIdService(userId, id_meta);
        if (!meta) {
            return res.status(404).json({ message: 'Meta no encontrada' });
        }
        res.json(meta);
    } catch (error) {
        console.error('Error al obtener la meta:', error);
        res.status(500).json({ message: 'Error al obtener la meta' });
    }
};

export const findMetasAhorroByUsuarioController = async (req, res) => {
    try {
        const userId = req.user.userId;
        const metas = await findMetasAhorroByUsuarioService(userId);
        res.json(metas);
    } catch (error) {
        console.error('Error al obtener las metas:', error);
        res.status(500).json({ message: 'Error al obtener las metas' });
    }
};

export const updateMetaAhorroController = async (req, res) => {
    try {
        const userId = req.user.userId;
        const { id_meta } = req.params;
        const { nombre_meta, monto_actual, monto_objetivo } = req.body;
        const meta = await updateMetaAhorroService(userId, id_meta, { nombre_meta, monto_actual, monto_objetivo });
        if (!meta) {
            return res.status(404).json({ message: 'Meta no encontrada' });
        }
        res.json(meta);
    } catch (error) {
        console.error('Error al actualizar la meta:', error);
        res.status(500).json({ message: 'Error al actualizar la meta' });
    }
};
