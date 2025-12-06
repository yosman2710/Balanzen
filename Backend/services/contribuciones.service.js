import { createContribucion, getContribucionesByMeta, deleteContribucion } from '../models/contribuciones.model.js';

export const createContribucionService = async (data) => {
    return await createContribucion(data);
};

export const getContribucionesByMetaService = async (id_meta) => {
    return await getContribucionesByMeta(id_meta);
};

export const deleteContribucionService = async (id_contribuciones) => {
    return await deleteContribucion(id_contribuciones);
};
