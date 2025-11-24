import {
  insertCategoria,
  deleteCategoria,
  getCategoriasByName,
  getCategoriaById,
  getCategoriasByTipo
} from '../models/categorias.model.js';

// Regla de negocio: no permitir duplicados personalizados para el mismo usuario
export const createCategoriaService = async (nombre_categoria, tipo, id_usuario) => {
  // Verificar duplicado (del usuario o predeterminada con mismo nombre)
  const found = await getCategoriasByName(nombre_categoria, id_usuario);
  if (found.some(cat => cat.nombre_categoria === nombre_categoria && cat.id_usuario === id_usuario)) {
    throw new Error("Ya existe una categoría personalizada con ese nombre.");
  }
  return await insertCategoria(nombre_categoria, tipo, id_usuario, false);
};

// Eliminar solo si NO es predeterminada y es del usuario. Regla de negocio: no eliminar predeterminada
export const deleteCategoriaService = async (id_categoria, id_usuario) => {
  const cat = await getCategoriaById(id_categoria, id_usuario);
  if (!cat || cat.es_predeterminada) throw new Error("No se puede eliminar una categoría predeterminada.");
  return await deleteCategoria(id_categoria, id_usuario);
};

// Buscar por nombre: devuelve todas del usuario + predeterminadas que coinciden
export const getCategoriasByNameService = async (nombre, id_usuario) =>
  await getCategoriasByName(nombre, id_usuario);

// Buscar por id: solo si pertenece al usuario o es predeterminada
export const getCategoriaByIdService = async (id_categoria, id_usuario) =>
  await getCategoriaById(id_categoria, id_usuario);

// Buscar por tipo: muestra predeterminadas y del usuario
export const getCategoriasByTipoService = async (tipo, id_usuario) =>
  await getCategoriasByTipo(tipo, id_usuario);

