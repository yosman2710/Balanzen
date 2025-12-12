import {
  getIngresosMesActual,
  getGastosMesActual,
  getPresupuestoMesActual,
  getIngresosMesAnterior,
  getGastosMesAnterior,
  getMonthlyIncomeExpenses,
  getRecentTransactions,
  getMetaAhorroReciente
} from '../models/cargarDatosDashboard.models.js';

export const fetchDashboardData = async (userId) => {
  try {
    const ingresosMes = await getIngresosMesActual(userId);
    const gastosMes = await getGastosMesActual(userId);
    const presupuestoMes = await getPresupuestoMesActual(userId);
    const ingresosAnterior = await getIngresosMesAnterior(userId);
    const gastosAnterior = await getGastosMesAnterior(userId);
    const monthly = await getMonthlyIncomeExpenses(userId);
    const recent = await getRecentTransactions(userId);
    const meta = await getMetaAhorroReciente(userId);

    return {
      ingresosMes,
      gastosMes,
      presupuestoMes,
      ingresosAnterior,
      gastosAnterior,
      monthly,
      recent,
      meta
    };
  } catch (error) {
    throw new Error(`Error fetching dashboard data: ${error.message}`);
  }
};
