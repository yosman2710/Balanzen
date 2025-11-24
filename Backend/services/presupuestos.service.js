import {
  createPresupuesto,
  deletePresupuesto,
  findPresupuestoById,
  findPresupuestosByUsuario,
  findPresupuestosByPeriodo,
  findPresupuestosByCategoria,
  updatePresupuesto
} from '../models/presupuestos.model.js';

// Crear presupuesto: no permitir duplicados para misma categoria/periodo
export const createPresupuestoService = async ({ id_usuario, id_categoria, monto_limite, mes, anio }) => {
  const existentes = await findPresupuestosByPeriodo(id_usuario, mes, anio);
  if (existentes.some(p => p.id_categoria === id_categoria)) {
    throw new Error('Ya existe un presupuesto para esta categoría en el periodo seleccionado.');
  }
  return await createPresupuesto({ id_usuario, id_categoria, monto_limite, mes, anio });
};

// Eliminar: permite solo si el presupuesto es del usuario actual
export const deletePresupuestoService = async (id_presupuesto, id_usuario) => {
  const presupuesto = await findPresupuestoById(id_presupuesto);
  if (!presupuesto || presupuesto.id_usuario !== id_usuario) {
    throw new Error('No autorizado para eliminar este presupuesto.');
  }
  return await deletePresupuesto(id_presupuesto);
};

// Actualizar: solo el dueño puede actualizar
export const updatePresupuestoService = async (id_presupuesto, id_usuario, { monto_limite, mes, anio }) => {
  const presupuesto = await findPresupuestoById(id_presupuesto);
  if (!presupuesto || presupuesto.id_usuario !== id_usuario) {
    throw new Error('No autorizado para editar este presupuesto.');
  }
  return await updatePresupuesto(id_presupuesto, { monto_limite, mes, anio });
};

// Listar todos mis presupuestos
export const findPresupuestosByUsuarioService = async (id_usuario) =>
  await findPresupuestosByUsuario(id_usuario);

// Listar por periodo
export const findPresupuestosByPeriodoService = async (id_usuario, mes, anio) =>
  await findPresupuestosByPeriodo(id_usuario, mes, anio);

// Listar por categoría (solo mías)
export const findPresupuestosByCategoriaService = async (id_categoria, id_usuario) => {
  const todos = await findPresupuestosByCategoria(id_categoria);
  return todos.filter(p => p.id_usuario === id_usuario);
};
