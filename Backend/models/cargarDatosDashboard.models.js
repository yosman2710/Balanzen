import db from '../db.js';


export const getIngresosMesActual = async (userId) => {
  const query = `
    SELECT COALESCE(SUM(t.monto),0) AS ingresos_mes_actual
    FROM transacciones t
    JOIN categorias c ON t.id_categoria = c.id_categoria
    WHERE t.id_usuario = ? AND c.tipo='ingreso' 
      AND DATE_FORMAT(t.fecha, '%Y-%m') = DATE_FORMAT(CURDATE(), '%Y-%m')
  `;
  const [rows] = await db.query(query, [userId]);
  return rows[0].ingresos_mes_actual;
};

// Obtener gastos del mes actual
export const getGastosMesActual = async (userId) => {
  const query = `
    SELECT COALESCE(SUM(t.monto),0) AS gastos_mes_actual FROM transacciones t JOIN categorias c ON t.id_categoria = c.id_categoria WHERE t.id_usuario = ? AND c.tipo='gasto' AND DATE_FORMAT(t.fecha, '%Y-%m') = DATE_FORMAT(CURDATE(), '%Y-%m');
  `;
  const [rows] = await db.query(query, [userId]);
  return rows[0].gastos_mes_actual;
};


// Obtener ingresos del mes anterior
export const getIngresosMesAnterior = async (userId) => {
  const query = `
    SELECT COALESCE(SUM(t.monto),0) AS ingresos_mes_anterior
    FROM transacciones t
    JOIN categorias c ON t.id_categoria = c.id_categoria
    WHERE t.id_usuario = ? AND c.tipo='ingreso'
      AND DATE_FORMAT(t.fecha, '%Y-%m') = DATE_FORMAT(DATE_SUB(CURDATE(), INTERVAL 1 MONTH), '%Y-%m')
  `;
  const [rows] = await db.query(query, [userId]);
  return rows[0].ingresos_mes_anterior;
};

// Obtener gastos del mes anterior
export const getGastosMesAnterior = async (userId) => {
  const query = `
    SELECT COALESCE(SUM(t.monto),0) AS gastos_mes_anterior
    FROM transacciones t
    JOIN categorias c ON t.id_categoria = c.id_categoria
    WHERE t.id_usuario = ? AND c.tipo='gasto'
      AND DATE_FORMAT(t.fecha, '%Y-%m') = DATE_FORMAT(DATE_SUB(CURDATE(), INTERVAL 1 MONTH), '%Y-%m')
  `;
  const [rows] = await db.query(query, [userId]);
  return rows[0].gastos_mes_anterior;
};







// Obtiene ingresos y gastos por mes para últimos 6 meses
export const getMonthlyIncomeExpenses = async (userId) => {
  const query = `
    SELECT 
      DATE_FORMAT(t.fecha, '%Y-%m') AS mes,
      SUM(CASE WHEN c.tipo = 'ingreso' THEN t.monto ELSE 0 END) AS ingresos,
      SUM(CASE WHEN c.tipo = 'gasto' THEN t.monto ELSE 0 END) AS gastos
    FROM transacciones t
    JOIN categorias c ON t.id_categoria = c.id_categoria
    WHERE t.id_usuario = ?
      AND t.fecha >= DATE_SUB(DATE_FORMAT(CURDATE(), '%Y-%m-01'), INTERVAL 5 MONTH)
    GROUP BY mes
    ORDER BY mes;
  `;
  const [rows] = await db.query(query, [userId]);
  return rows;
};


// Obtiene últimas 3 transacciones con formato de fecha
export const getRecentTransactions = async (userId) => {
  const query = `
    SELECT t.id_transaccion AS id, c.tipo AS type, c.nombre_categoria AS category, t.monto AS amount, DATE_FORMAT(t.fecha, '%d %b, %H:%i') AS date, t.descripcion AS description FROM transacciones t JOIN categorias c ON t.id_categoria = c.id_categoria WHERE t.id_usuario = ?  ORDER BY t.fecha DESC LIMIT 3;
  `;
  const [rows] = await db.query(query, [userId]);
  return rows;
};
