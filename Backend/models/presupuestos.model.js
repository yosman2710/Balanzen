import db from "../db";

// Crear un presupuesto
export const createPresupuesto = async ({ id_usuario, id_categoria, monto_limite, mes, anio }) => {
  const query = `
    INSERT INTO presupuestos (id_usuario, id_categoria, monto_limite, mes, anio)
    VALUES (?, ?, ?, ?, ?)
  `;
  const [result] = await db.query(query, [id_usuario, id_categoria, monto_limite, mes, anio]);
  return result.insertId;
};

// Eliminar un presupuesto por id
export const deletePresupuesto = async (id_presupuesto) => {
  const query = `DELETE FROM presupuestos WHERE id_presupuesto = ?`;
  const [result] = await db.query(query, [id_presupuesto]);
  return result.affectedRows > 0;
};

// Buscar presupuesto por id
export const findPresupuestoById = async (id_presupuesto) => {
  const query = `SELECT * FROM presupuestos WHERE id_presupuesto = ?`;
  const [rows] = await db.query(query, [id_presupuesto]);
  return rows[0];
};

// Buscar todos los presupuestos de un usuario (listado completo)
export const findPresupuestosByUsuario = async (id_usuario) => {
  const query = `SELECT * FROM presupuestos WHERE id_usuario = ?`;
  const [rows] = await db.query(query, [id_usuario]);
  return rows;
};

// Buscar presupuestos por año y mes para un usuario (útil para dashboards)
export const findPresupuestosByPeriodo = async (id_usuario, mes, anio) => {
  const query = `
    SELECT * FROM presupuestos
    WHERE id_usuario = ? AND mes = ? AND anio = ?
  `;
  const [rows] = await db.query(query, [id_usuario, mes, anio]);
  return rows;
};

// Buscar presupuestos por categoría
export const findPresupuestosByCategoria = async (id_categoria) => {
  const query = `SELECT * FROM presupuestos WHERE id_categoria = ?`;
  const [rows] = await db.query(query, [id_categoria]);
  return rows;
};

// Actualizar presupuesto por id
export const updatePresupuesto = async (id_presupuesto, { monto_limite, mes, anio }) => {
  const query = `
    UPDATE presupuestos SET monto_limite = ?, mes = ?, anio = ?
    WHERE id_presupuesto = ?
  `;
  const [result] = await db.query(query, [monto_limite, mes, anio, id_presupuesto]);
  return result.affectedRows > 0;
};
