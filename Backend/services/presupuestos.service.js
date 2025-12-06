import {
  createPresupuesto,
  deletePresupuesto,
  findPresupuestoById,
  findPresupuestosByUsuario,
  findPresupuestosByUsuario,
  findPresupuestosByFecha,
  findPresupuestosByCategoria,
  updatePresupuesto
} from '../models/presupuestos.model.js';

// Crear presupuesto: no permitir duplicados para misma categoria/periodo
// Crear presupuesto: no permitir duplicados para misma categoria/periodo (la validación temporal es más compleja, por ahora simplificamos o validamos solapamiento)
export const createPresupuestoService = async ({ id_usuario, id_categoria, monto_limite, fecha_inicio, fecha_final, alerta }) => {
  // Validación de solapamiento opcional o futura
  return await createPresupuesto({ id_usuario, id_categoria, monto_limite, fecha_inicio, fecha_final, alerta });
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
export const updatePresupuestoService = async (id_presupuesto, id_usuario, { monto_limite, fecha_inicio, fecha_final, alerta }) => {
  const presupuesto = await findPresupuestoById(id_presupuesto);
  if (!presupuesto || presupuesto.id_usuario !== id_usuario) {
    throw new Error('No autorizado para editar este presupuesto.');
  }
  return await updatePresupuesto(id_presupuesto, { monto_limite, fecha_inicio, fecha_final, alerta });
};

// Listar todos mis presupuestos
export const findPresupuestosByUsuarioService = async (id_usuario) =>
  await findPresupuestosByUsuario(id_usuario);

// Listar por fecha valida
export const findPresupuestosByFechaService = async (id_usuario, fecha) =>
  await findPresupuestosByFecha(id_usuario, fecha);

// Listar por categoría (solo mías)
export const findPresupuestosByCategoriaService = async (id_categoria, id_usuario) => {
  const todos = await findPresupuestosByCategoria(id_categoria);
  return todos.filter(p => p.id_usuario === id_usuario);
};
