import {
  createPresupuestoService,
  deletePresupuestoService,
  updatePresupuestoService,
  findPresupuestosByUsuarioService,
  findPresupuestosByPeriodoService,
  findPresupuestosByCategoriaService
} from '../services/presupuestos.service.js';

// Crear presupuesto
export const createPresupuestoController = async (req, res) => {
  try {
    const id_usuario = req.user.id; // autenticado
    const { id_categoria, monto_limite, mes, anio } = req.body;
    const id = await createPresupuestoService({ id_usuario, id_categoria, monto_limite, mes, anio });
    res.status(201).json({ id });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Eliminar presupuesto
export const deletePresupuestoController = async (req, res) => {
  try {
    const id_usuario = req.user.id;
    const { id_presupuesto } = req.params;
    await deletePresupuestoService(id_presupuesto, id_usuario);
    res.json({ message: 'Presupuesto eliminado correctamente' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Actualizar presupuesto
export const updatePresupuestoController = async (req, res) => {
  try {
    const id_usuario = req.user.id;
    const { id_presupuesto } = req.params;
    const { monto_limite, mes, anio } = req.body;
    await updatePresupuestoService(id_presupuesto, id_usuario, { monto_limite, mes, anio });
    res.json({ message: 'Presupuesto actualizado correctamente' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Listar todos los presupuestos propios
export const getPresupuestosController = async (req, res) => {
  try {
    const id_usuario = req.user.id;
    const presupuestos = await findPresupuestosByUsuarioService(id_usuario);
    res.json(presupuestos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Buscar por periodo
export const getPresupuestosByPeriodoController = async (req, res) => {
  try {
    const id_usuario = req.user.id;
    const { mes, anio } = req.query;
    const presupuestos = await findPresupuestosByPeriodoService(id_usuario, mes, anio);
    res.json(presupuestos);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Buscar por categoría
export const getPresupuestosByCategoriaController = async (req, res) => {
  try {
    const id_usuario = req.user.id;
    const { id_categoria } = req.params;
    const presupuestos = await findPresupuestosByCategoriaService(id_categoria, id_usuario);
    res.json(presupuestos);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
