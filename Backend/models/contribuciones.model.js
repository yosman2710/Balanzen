import db from "../db.js";

// Crear contribucion
export const createContribucion = async (userId, id_meta, monto, descripcion) => {
    const query = `
    INSERT INTO contribuciones (id_usuario, id_meta, monto, descripcion, fecha)
    VALUES (?, ?, ?, ?, NOW())
  `;
    const [result] = await db.query(query, [userId, id_meta, monto, descripcion]);
    return result.insertId;
};

// Obtener contribuciones por meta
export const getContribucionesByMeta = async (id_meta) => {
    const query = `SELECT * FROM contribuciones WHERE id_meta = ? ORDER BY fecha DESC;`;
    const [rows] = await db.query(query, [id_meta]);
    return rows;
};

// Eliminar contribucion
export const deleteContribucion = async (userId, id_meta, id_contribucion) => {
    const query = `DELETE FROM contribuciones WHERE id_contribuciones = ? AND id_meta = ? AND id_usuario = ?`;
    const [result] = await db.query(query, [id_contribucion, id_meta, userId]);
    return result.affectedRows > 0;
};
