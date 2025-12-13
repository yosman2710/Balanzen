// services/transaccion.service.js
import {
    createTransaccion,
    deleteTransaccion,
    findTransaccionById,
    findTransaccionesByCategoriaNombre,
    findTransaccionesByCategoriaId,
    findTransaccionesByCategoriaTipo,
    findTransaccionesByNombre,
    updateTransaccion,
    getTransaccionesUser
} from '../models/transaccion.model.js';

// Obtener transacción por ID
export const getTransaccionByIdService = async (id_transaccion) => {
    const result = await findTransaccionById(id_transaccion);
    if (!result) {
        throw { status: 404, message: "Transacción no encontrada" };
    }
    return result;
};

// Crear una transacción
export const createTransaccionService = async (data) => {
    return await createTransaccion({
        id_usuario: data.id_usuario,
        id_categoria: data.id_categoria,
        nombre_transaccion: data.nombre_transaccion,
        monto: data.monto,
        fecha: data.fecha,
        descripcion: data.descripcion,
    });
};


// Eliminar una transacción por ID
export const deleteTransaccionService = async (id_transaccion) => {
    const deleted = await deleteTransaccion(id_transaccion);
    if (!deleted) {
        throw { status: 404, message: "Transacción no encontrada o ya eliminada" };
    }
    return { message: "Transacción eliminada correctamente" };
};

// Buscar transacciones por nombre de categoría
export const getTransaccionesByCategoriaNombreService = async (nombre_categoria) => {
    return await findTransaccionesByCategoriaNombre(nombre_categoria);
};

// Buscar transacciones por ID de categoría
export const getTransaccionesByCategoriaIdService = async (id_categoria) => {
    return await findTransaccionesByCategoriaId(id_categoria);
};

// Buscar transacciones por tipo de categoría
export const getTransaccionesByCategoriaTipoService = async (tipo) => {
    return await findTransaccionesByCategoriaTipo(tipo);
};

// Buscar transacciones por nombre de transacción
export const getTransaccionesByNombreService = async (nombre_transaccion) => {
    return await findTransaccionesByNombre(nombre_transaccion);
};

// Actualizar una transacción existente
export const updateTransaccionService = async (id_transaccion, updates) => {
    // updates: objeto con los datos nuevos { id_usuario, id_categoria, monto, fecha, descripcion, nombre_transaccion }
    const updated = await updateTransaccion(
        id_transaccion,
        updates.id_usuario,
        updates.id_categoria,
        updates.monto,
        updates.fecha,
        updates.descripcion,
        updates.nombre_transaccion
    );
    if (!updated) {
        throw { status: 404, message: "No se pudo actualizar la transacción: no encontrada" };
    }
    return { message: "Transacción actualizada correctamente" };
};

export const getTransaccionesUserService = async (id_usuario) => {
    const transactions = await getTransaccionesUser(id_usuario);
    return transactions.map(transaction => {
        const fecha = new Date(transaction.fecha);
        return {
            id: transaction.id_transaccion,
            type: transaction.tipo,
            description: transaction.nombre_transaccion,
            amount: Number(transaction.monto),
            category: transaction.nombre_categoria,
            date: fecha.toISOString().split('T')[0],
            icon: transaction.icon,
        };

    });
};