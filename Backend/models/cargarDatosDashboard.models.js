import db from '../db.js';


export const getIngresosMesActual = async (userId) => {
  const query = `
    SELECT COALESCE(SUM(t.monto),0) AS ingresos_mes_actual
    FROM Transacciones t
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
    SELECT COALESCE(SUM(t.monto),0) AS gastos_mes_actual
    FROM Transacciones t
    JOIN categorias c ON t.id_categoria = c.id_categoria
    WHERE t.id_usuario = ? AND c.tipo='gasto'
      AND DATE_FORMAT(t.fecha, '%Y-%m') = DATE_FORMAT(CURDATE(), '%Y-%m')
  `;
  const [rows] = await db.query(query, [userId]);
  return rows[0].gastos_mes_actual;
};

// Obtener presupuesto del mes actual
export const getPresupuestoMesActual = async (userId) => {
  const query = `
    SELECT COALESCE(SUM(p.monto_limite),0) AS presupuesto_mes_actual
    FROM Presupuestos p
    WHERE p.id_usuario = ? AND p.mes = MONTH(CURDATE()) AND p.anio = YEAR(CURDATE())
  `;
  const [rows] = await db.query(query, [userId]);
  return rows[0].presupuesto_mes_actual;
};

// Obtener ingresos del mes anterior
export const getIngresosMesAnterior = async (userId) => {
  const query = `
    SELECT COALESCE(SUM(t.monto),0) AS ingresos_mes_anterior
    FROM Transacciones t
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
    FROM Transacciones t
    JOIN categorias c ON t.id_categoria = c.id_categoria
    WHERE t.id_usuario = ? AND c.tipo='gasto'
      AND DATE_FORMAT(t.fecha, '%Y-%m') = DATE_FORMAT(DATE_SUB(CURDATE(), INTERVAL 1 MONTH), '%Y-%m')
  `;
  const [rows] = await db.query(query, [userId]);
  return rows[0].gastos_mes_anterior;
};

export const getMetaAhorroReciente = async (userId) => {
  const query = `
    SELECT id_meta, nombre_meta, monto_actual, monto_objetivo, fecha_creacion
    FROM meta_ahorro
    WHERE id_usuario = ?
    ORDER BY fecha_creacion DESC
    LIMIT 1;
  `;
  const [rows] = await db.query(query, [userId]);
  if (!rows.length) return null;

  const meta = rows[0];
  return {
    id: meta.id_meta,
    name: meta.nombre_meta,
    current: meta.monto_actual,
    target: meta.monto_objetivo,
    percentage: (meta.monto_actual / meta.monto_objetivo) * 100,
    createdAt: meta.fecha_creacion,
  };
};





// Obtiene ingresos y gastos por mes para últimos 6 meses
export const getMonthlyIncomeExpenses = async (userId) => {
  const query = `
    SELECT 
      DATE_FORMAT(t.fecha, '%Y-%m') AS mes,
      SUM(CASE WHEN c.tipo = 'ingreso' THEN t.monto ELSE 0 END) AS ingresos,
      SUM(CASE WHEN c.tipo = 'gasto' THEN t.monto ELSE 0 END) AS gastos
    FROM Transacciones t
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
    SELECT t.id_transaccion AS id, c.tipo AS type, c.nombre_categoria AS category, t.monto AS amount, DATE_FORMAT(t.fecha, '%d %b, %H:%i') AS date, t.descripcion AS description FROM Transacciones t JOIN categorias c ON t.id_categoria = c.id_categoria WHERE t.id_usuario = ?  ORDER BY t.fecha DESC LIMIT 3;
  `;
  const [rows] = await db.query(query, [userId]);
  return rows;
};
