import db from "../db";
// Crear meta de ahorro
export const createMetaAhorro = async ({ id_usuario, nombre_meta, descripcion_meta, monto, fecha_inicio, fecha_finalizacion }) => {
  const query = `
    INSERT INTO meta_ahorro (id_usuario, nombre_meta, descripcion_meta, monto, fecha_inicio, fecha_finalizacion)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  const [result] = await db.query(query, [id_usuario, nombre_meta, descripcion_meta, monto, fecha_inicio, fecha_finalizacion]);
  return result.insertId;
};

// Eliminar meta de ahorro por id
export const deleteMetaAhorro = async (id_meta) => {
  const query = `DELETE FROM meta_ahorro WHERE id_meta = ?`;
  const [result] = await db.query(query, [id_meta]);
  return result.affectedRows > 0;
};

// Buscar meta de ahorro por id
export const findMetaAhorroById = async (id_meta) => {
  const query = `SELECT * FROM meta_ahorro WHERE id_meta = ?`;
  const [rows] = await db.query(query, [id_meta]);
  return rows[0];
};

// Buscar metas de ahorro por usuario
export const findMetasAhorroByUsuario = async (id_usuario) => {
  const query = `SELECT * FROM meta_ahorro WHERE id_usuario = ?`;
  const [rows] = await db.query(query, [id_usuario]);
  return rows;
};

// Actualizar meta de ahorro por id
export const updateMetaAhorro = async (id_meta, { nombre_meta, descripcion_meta, monto, fecha_inicio, fecha_finalizacion }) => {
  const query = `
    UPDATE meta_ahorro SET nombre_meta = ?, descripcion_meta = ?, monto = ?, fecha_inicio = ?, fecha_finalizacion = ?
    WHERE id_meta = ?
  `;
  const [result] = await db.query(query, [nombre_meta, descripcion_meta, monto, fecha_inicio, fecha_finalizacion, id_meta]);
  return result.affectedRows > 0;
};
