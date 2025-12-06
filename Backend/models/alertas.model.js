import db from "../db.js";

// Crear alerta
export const createAlerta = async ({ id_usuario, id_presupuesto, tipo_alerta }) => {
    const query = `
    INSERT INTO alertas (id_usuario, id_presupuesto, tipo_alerta, fecha_alerta)
    VALUES (?, ?, ?, NOW())
  `;
    const [result] = await db.query(query, [id_usuario, id_presupuesto, tipo_alerta]);
    return result.insertId;
};

// Obtener alertas por usuario
export const getAlertasByUsuario = async (id_usuario) => {
    const query = `SELECT * FROM alertas WHERE id_usuario = ? ORDER BY fecha_alerta DESC`;
    const [rows] = await db.query(query, [id_usuario]);
    return rows;
};

// Eliminar alerta
export const deleteAlerta = async (id_alerta) => {
    const query = `DELETE FROM alertas WHERE id_alerta = ?`;
    const [result] = await db.query(query, [id_alerta]);
    return result.affectedRows > 0;
};
