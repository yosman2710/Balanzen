import {
  getIngresosMesActual,
  getGastosMesActual,
  getPresupuestoMesActual,
  getIngresosMesAnterior,
  getGastosMesAnterior,
  getMonthlyIncomeExpenses,
  getRecentTransactions
} from '../models/cargarDatosDashboard.models.js';

export const fetchDashboardData = async (userId) => {
  try {
    const ingresosActual = await getIngresosMesActual(userId);
    const gastosActual = await getGastosMesActual(userId);
    const presupuestoActual = await getPresupuestoMesActual(userId);
    const ingresosAnterior = await getIngresosMesAnterior(userId);
    const gastosAnterior = await getGastosMesAnterior(userId);
    const monthlyData = await getMonthlyIncomeExpenses(userId);
    const recentTrans = await getRecentTransactions(userId);

    return {
      ingresosActual,
      gastosActual,
      presupuestoActual,
      ingresosAnterior,
      gastosAnterior,
      monthlyData,
      recentTrans
    };
  } catch (error) {
    throw new Error(`Error fetching dashboard data: ${error.message}`);
  }
};
