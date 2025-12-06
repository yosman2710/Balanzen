import { createContribucionService, getContribucionesByMetaService, deleteContribucionService } from '../services/contribuciones.service.js';

export const createContribucionController = async (req, res) => {
    try {
        const id_usuario = req.user.id;
        const { id_meta, monto, descripcion, fecha } = req.body;
        const id = await createContribucionService({ id_usuario, id_meta, monto, descripcion, fecha });
        res.status(201).json({ id });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const getContribucionesByMetaController = async (req, res) => {
    try {
        const { id_meta } = req.params;
        const contribuciones = await getContribucionesByMetaService(id_meta);
        res.json(contribuciones);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

export const deleteContribucionController = async (req, res) => {
    try {
        const { id } = req.params;
        await deleteContribucionService(id);
        res.json({ message: 'Contribución eliminada' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
