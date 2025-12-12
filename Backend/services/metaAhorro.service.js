import {
    getMetaAhorroDashboard, createMetaAhorro, deleteMetaAhorro,
    findMetaAhorroById, findMetasAhorroByUsuario, updateMetaAhorro
} from '../models/metahorro.model.js';

export const getMetaAhorroDashboardService = async (userId) => {
    return await getMetaAhorroDashboard(userId);
};

export const createMetaAhorroService = async (userId, nombre_meta, descripcion_meta, monto_objetivo) => {
    return await createMetaAhorro(userId, nombre_meta, descripcion_meta, monto_objetivo);
};

export const deleteMetaAhorroService = async (userId, id_meta) => {
    return await deleteMetaAhorro(userId, id_meta);
};

export const findMetaAhorroByIdService = async (userId, id_meta) => {
    return await findMetaAhorroById(userId, id_meta);
};

export const findMetasAhorroByUsuarioService = async (userId) => {
    return await findMetasAhorroByUsuario(userId);
};

export const updateMetaAhorroService = async (userId, id_meta, data) => {
    return await updateMetaAhorro(userId, id_meta, data);
};
