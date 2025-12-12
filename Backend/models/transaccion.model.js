import db from "../db.js";

// Crear una transacción
export const createTransaccion = async ({ id_usuario, id_categoria, nombre_transaccion, monto, fecha, descripcion }) => {
  const query = `
    INSERT INTO transacciones (id_usuario, id_categoria, nombre_transaccion, monto, fecha, descripcion)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  const [result] = await db.query(query, [id_usuario, id_categoria, nombre_transaccion, monto, fecha, descripcion]);
  return result.insertId; // Devuelve el id de la nueva transacción
};

// Eliminar una transacción por id
export const deleteTransaccion = async (id_transaccion) => {
  const query = `DELETE FROM transacciones WHERE id_transaccion = ?`;
  const [result] = await db.query(query, [id_transaccion]);
  return result.affectedRows > 0;
};

// Buscar transacción por id
export const findTransaccionById = async (id_transaccion) => {
  const query = `SELECT * FROM transacciones WHERE id_transaccion = ?`;
  const [rows] = await db.query(query, [id_transaccion]);
  return rows[0];
};

// Buscar transacciones por nombre de categoría (JOIN)
export const findTransaccionesByCategoriaNombre = async (nombre_categoria) => {
  const query = `
    SELECT t.*
    FROM transacciones t
    JOIN categorias c ON t.id_categoria = c.id_categoria
    WHERE c.nombre_categoria LIKE ?
  `;
  const [rows] = await db.query(query, [`%${nombre_categoria}%`]);
  return rows;
};

// Buscar transacciones por ID de categoría
export const findTransaccionesByCategoriaId = async (id_categoria) => {
  const query = `
    SELECT *
    FROM transacciones
    WHERE id_categoria = ?
    ORDER BY fecha DESC
  `;
  const [rows] = await db.query(query, [id_categoria]);
  return rows;
};

// Buscar transacciones por tipo de categoría (ingreso/gasto)
export const findTransaccionesByCategoriaTipo = async (tipo) => {
  const query = `
    SELECT t.*
    FROM transacciones t
    JOIN categorias c ON t.id_categoria = c.id_categoria
    WHERE c.tipo = ?
  `;
  const [rows] = await db.query(query, [tipo]); // tipo debe ser 'ingreso' o 'gasto'
  return rows;
};

export const findTransaccionesByNombre = async (nombre_transaccion) => {
  const query = `
    SELECT * FROM transacciones WHERE nombre_transaccion LIKE ?
  `;
  const [rows] = await db.query(query, [`%${nombre_transaccion}%`]);
  return rows; // Devuelve un array de transacciones que coinciden
};

export const updateTransaccion = async (id_transaccion, { id_usuario, id_categoria, monto, fecha, descripcion, nombre_transaccion }) => {
  const query = `
    UPDATE transacciones SET id_usuario = ?, id_categoria = ?, monto = ?, fecha = ?, descripcion = ?, nombre_transaccion = ?
    WHERE id_transaccion = ?
  `;
  const [result] = await db.query(query, [id_usuario, id_categoria, monto, fecha, descripcion, nombre_transaccion, id_transaccion]);
  return result.affectedRows > 0;
};

export const getTransaccionesUser = async (id_usuario) => {
  const query = `SELECT t.id_transaccion, u.nombre, c.nombre_categoria, c.tipo, t.nombre_transaccion, t.monto, t.fecha, t.descripcion FROM transacciones t JOIN categorias c ON t.id_categoria = c.id_categoria JOIN usuarios u ON t.id_usuario = u.id_usuario WHERE t.id_usuario = ?`;
  const [rows] = await db.query(query, [id_usuario]);
  return rows;
};











