import db from "../db.js";

// Guardar historial
export const createHistorial = async ({ id_chat, id_usuario, pregunta, respuesta }) => {
    const query = `
    INSERT INTO historial_chatbot (id_chat, id_usuario, pregunta, respuesta, fecha_hora)
    VALUES (?, ?, ?, ?, NOW())
  `;
    const [result] = await db.query(query, [id_chat, id_usuario, pregunta, respuesta]);
    return result.insertId;
};

// Obtener historial por usuario
export const getHistorialByUsuario = async (id_usuario) => {
    const query = `SELECT * FROM historial_chatbot WHERE id_usuario = ? ORDER BY fecha_hora ASC`;
    const [rows] = await db.query(query, [id_usuario]);
    return rows;
};
