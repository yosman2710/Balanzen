import db from "../db";

// Crear una transacción
export const createTransaccion = async ({ id_usuario, id_categoria, monto, fecha, descripcion, nombre_transaccion }) => {
  const query = `
    INSERT INTO transacciones (id_usuario, id_categoria, monto, fecha, descripcion, nombre_transaccion)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  const [result] = await db.query(query, [id_usuario, id_categoria, monto, fecha, descripcion, nombre_transaccion]);
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











