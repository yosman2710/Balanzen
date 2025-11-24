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
  const query = `SELECT * FROM usuarios WHERE id = ?`;
  const [results] = await db.query(query, [id]);
  return results;
};

// Buscar usuario por email
export const findUserByEmail = async (email) => {
  const query = `SELECT * FROM usuarios WHERE email = ?`;
  const [results] = await db.query(query, [email]);
  return results;
};
