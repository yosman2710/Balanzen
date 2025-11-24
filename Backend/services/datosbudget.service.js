import { getBudgetsWithSpent } from '../models/cargarDatosBudget.js';

// Regla de negocio: calcula el porcentaje utilizado y el restante para frontend
export const fetchBudgetsWithProgressService = async (userId) => {
  const budgets = await getBudgetsWithSpent(userId);
  return budgets.map(budget => {
    const usedPercent = budget.limit > 0 ? Math.round((budget.spent / budget.limit) * 100) : 0;
    return {
      id: budget.id,
      category: budget.category,
      limit: budget.limit,
      spent: budget.spent,
      usedPercent,
      remaining: budget.limit - budget.spent
    };
  });
};
