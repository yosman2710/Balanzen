import db from '../db.js';

// Obtiene presupuestos con montos gastados actuales por categoría
export const getBudgetsWithSpent = async (userId) => {
  const query = `
    SELECT 
      p.id_presupuesto AS id,
      c.nombre_categoria AS category,
      p.monto_limite AS \`limit\`,
      COALESCE(SUM(t.monto), 0) AS spent
    FROM Presupuestos p
    JOIN Categorias c ON p.id_categoria = c.id_categoria
    LEFT JOIN Transacciones t ON p.id_usuario = t.id_usuario 
      AND p.id_categoria = t.id_categoria 
      AND DATE_FORMAT(t.fecha, '%Y-%m') = DATE_FORMAT(CURDATE(), '%Y-%m')
    WHERE p.id_usuario = ?
      AND p.mes = MONTH(CURDATE())
      AND p.anio = YEAR(CURDATE())
    GROUP BY p.id_presupuesto, c.nombre_categoria, p.monto_limite;
  `;
  const [rows] = await db.query(query, [userId]);
  return rows;
};
