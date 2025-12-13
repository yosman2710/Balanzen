import db from "../db.js";
// Crear meta de ahorro
export const createMetaAhorro = async (id_usuario, nombre_meta, descripcion_meta, monto_objetivo) => {
  const query = `
    INSERT INTO meta_ahorro (id_usuario, nombre_meta, descripcion_meta, monto_actual, monto_objetivo, fecha_creacion)
    VALUES (?, ?, ?, ?, ?, NOW())
  `;
  const [result] = await db.query(query, [id_usuario, nombre_meta, descripcion_meta, 0, monto_objetivo]);
  return result.insertId;
};

// Eliminar meta de ahorro por id
export const deleteMetaAhorro = async (id_usuario, id_meta) => {
  const query = `DELETE FROM meta_ahorro WHERE id_meta = ? AND id_usuario = ?`;
  const [result] = await db.query(query, [id_meta, id_usuario]);
  return result.affectedRows > 0;
};

// Buscar meta de ahorro por id
export const findMetaAhorroById = async (id_usuario, id_meta) => {
  const query = `SELECT * FROM meta_ahorro WHERE id_meta = ? AND id_usuario = ?`;
  const [rows] = await db.query(query, [id_meta, id_usuario]);
  return rows[0];
};

// Buscar metas de ahorro por usuario
export const findMetasAhorroByUsuario = async (id_usuario) => {
  const query = `SELECT * FROM meta_ahorro WHERE id_usuario = ?`;
  const [rows] = await db.query(query, [id_usuario]);
  return rows;
};

// Actualizar meta de ahorro por id
export const updateMetaAhorro = async (id_usuario, id_meta, { nombre_meta, descripcion_meta, monto_actual, monto_objetivo }) => {
  const query = `
    UPDATE meta_ahorro SET nombre_meta = ?, descripcion_meta = ?, monto_actual = ?, monto_objetivo = ?
    WHERE id_meta = ? AND id_usuario = ?
  `;
  const [result] = await db.query(query, [nombre_meta, descripcion_meta, monto_actual, monto_objetivo, id_meta, id_usuario]);
  return result.affectedRows > 0;
};


export const getMetaAhorroDashboard = async (id_usuario) => {
  const query = `
    SELECT nombre_meta, monto_actual, monto_objetivo, fecha_creacion
    FROM meta_ahorro
    WHERE id_usuario = ?
    ORDER BY fecha_creacion DESC
    LIMIT 1;
  `;
  const [rows] = await db.query(query, [id_usuario]);
  if (!rows.length) return null;

  const meta = rows[0];
  return {
    name: meta.nombre_meta,
    current: Number(meta.monto_actual),
    target: Number(meta.monto_objetivo),
    percentage: Number(((meta.monto_actual / meta.monto_objetivo) * 100).toFixed(2)),
    createdAt: meta.fecha_creacion,
  };
};
