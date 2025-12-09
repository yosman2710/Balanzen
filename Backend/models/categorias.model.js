import db from "../db.js";

// Crear categoría personalizada (requiere id_usuario y asume no predeterminada)
export const insertCategoria = async (nombre_categoria, tipo, id_usuario, color, icon, es_predeterminada = false) => {
  const query = `
    INSERT INTO categorias (nombre_categoria, tipo, id_usuario, color, icon, es_predeterminada)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  const [result] = await db.query(query, [nombre_categoria, tipo, id_usuario, color, icon, es_predeterminada]);
  return result.insertId;
};

// Eliminar solo si es personalizada y del usuario actual (no predeterminada)
export const deleteCategoria = async (id_categoria, id_usuario) => {
  const query = `
    DELETE FROM categorias
    WHERE id_categoria = ? AND id_usuario = ? AND es_predeterminada = 0
  `;
  const [result] = await db.query(query, [id_categoria, id_usuario]);
  return result.affectedRows;
};

// Buscar categorías por nombre (devuelve personalizadas del usuario y predeterminadas)
export const getCategoriasByName = async (nombre, id_usuario) => {
  const query = `
    SELECT * FROM categorias
    WHERE nombre_categoria LIKE ?
      AND (id_usuario = ? OR es_predeterminada = 1)
  `;
  const [rows] = await db.query(query, [`%${nombre}%`, id_usuario]);
  return rows;
};

// Buscar categoría por id (SOLO si pertenece al usuario o es predeterminada)
export const getCategoriaById = async (id_categoria, id_usuario) => {
  const query = `
    SELECT * FROM categorias
    WHERE id_categoria = ?
      AND (id_usuario = ? OR es_predeterminada = 1)
  `;
  const [rows] = await db.query(query, [id_categoria, id_usuario]);
  return rows[0];
};

// Listar todas las categorías por tipo (devuelve predeterminadas y personalizadas del usuario)
export const getCategoriasUser = async (id_usuario) => {
  const query = `
    SELECT * FROM categorias
    WHERE (id_usuario = ? OR es_predeterminada = 1)
  `;
  const [rows] = await db.query(query, [id_usuario]);
  return rows;
};




