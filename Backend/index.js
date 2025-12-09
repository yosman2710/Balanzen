import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from "./db.js";

// Routes
import authRoutes from './routes/auth.route.js';
import categoriaRoutes from './routes/categoria.route.js';
import presupuestoRoutes from './routes/presupuestos.route.js';
import transaccionRoutes from './routes/transaccion.route.js';
import datosDashboardRoutes from './routes/datosDashboard.route.js';
import datosBudgetRoutes from './routes/datosbudget.route.js';
import alertasRoutes from './routes/alertas.route.js';
import contribucionesRoutes from './routes/contribuciones.route.js';
import chatbotRoutes from './routes/historial_chatbot.route.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Test DB Connection
async function testConnection() {
  try {
    const [rows] = await pool.query("SELECT NOW() AS now");
    console.log("Conexión a base de datos exitosa. Hora del servidor:", rows[0].now);
  } catch (err) {
    console.error("Error al conectar a la base de datos:", err);
  }
}

testConnection();

// Routes Registration
app.use('/api/auth', authRoutes);
app.use('/api/categorias', categoriaRoutes);
app.use('/api/presupuestos', presupuestoRoutes);
app.use('/api/transacciones', transaccionRoutes);
app.use('/api/dashboard', datosDashboardRoutes);
app.use('/api/budget', datosBudgetRoutes);
app.use('/api/alertas', alertasRoutes);
app.use('/api/contribuciones', contribucionesRoutes);
app.use('/api/chatbot', chatbotRoutes);

app.get('/', (req, res) => {
  res.json({ mensaje: 'Backend de Balanzen funcionando correctamente 🚀' });
});

// Start Server
app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor corriendo en:`);
  console.log(`- Local:   http://localhost:${port}`);
  console.log(`- Network: http://192.168.1.101:${port} (Usar esta IP en el celular)`);
});