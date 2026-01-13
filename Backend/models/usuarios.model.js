import db from "../db.js";

// Crear usuario
export const createUsuario = async ({ nombre, email, password, fecha_nacimiento, genero, pais }) => {
  const query = `
    INSERT INTO usuarios (nombre, email, password, fecha_nacimiento, genero, pais, fecha_creacion)
    VALUES (?, ?, ?, ?, ?, ?, NOW())
  `;
  const [result] = await db.query(query, [nombre, email, password, fecha_nacimiento, genero, pais]);
  return result.insertId;
};

// Obtener usuario por id
export const getUserByIdFromDB = async (id) => {
  const query = `SELECT * FROM usuarios WHERE id_usuario = ?`;
  const [results] = await db.query(query, [id]);
  return results[0];
};

// Buscar usuario por email
export const findUserByEmail = async (email) => {
  const query = `SELECT * FROM usuarios WHERE email = ?`;
  const [results] = await db.query(query, [email]);
  return results;
};

export const updateUser = async (id, { nombre, email, fecha_nacimiento, genero, pais }) => {
  const query = `
    UPDATE usuarios
    SET nombre = ?, email = ?, fecha_nacimiento = ?, genero = ?, pais = ?
    WHERE id_usuario = ?
  `;
  const [result] = await db.query(query, [nombre, email, fecha_nacimiento, genero, pais, id]);
  return result.affectedRows;
};

export const updatePassword = async (id, password) => {
  const query = `UPDATE usuarios SET password = ? WHERE id_usuario = ?`;
  const [result] = await db.query(query, [password, id]);
  return result.affectedRows;
};
