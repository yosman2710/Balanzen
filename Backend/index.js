import express from 'express'
import cors from 'cors'
import pool from "./db.js";


const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());
async function testConnection() {
  try {
    const [rows] = await pool.query("SELECT NOW() AS now");
    console.log("Fecha y hora MySQL:", rows[0].now);
  } catch (err) {
    console.error("Error al conectar:", err);
  }
}

testConnection();

app.get('/', (req, res) => {
  res.json({ mensaje: 'Backend funcionando con Node.js y Express con CORS' });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});