import db from "../db.js";

// Crear contribucion
export const createContribucion = async ({ id_usuario, id_meta, monto, descripcion, fecha }) => {
    const query = `
    INSERT INTO contribuciones (id_usuario, id_meta, monto, descripcion, fecha)
    VALUES (?, ?, ?, ?, ?)
  `;
    const [result] = await db.query(query, [id_usuario, id_meta, monto, descripcion, fecha]);
    return result.insertId;
};

// Obtener contribuciones por meta
export const getContribucionesByMeta = async (id_meta) => {
    const query = `SELECT * FROM contribuciones WHERE id_meta = ? ORDER BY fecha DESC`;
    const [rows] = await db.query(query, [id_meta]);
    return rows;
};

// Eliminar contribucion
export const deleteContribucion = async (id_contribuciones) => {
    const query = `DELETE FROM contribuciones WHERE id_contribuciones = ?`;
    const [result] = await db.query(query, [id_contribuciones]);
    return result.affectedRows > 0;
};
