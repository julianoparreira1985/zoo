const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

app.get("/hora", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  res.json(result.rows);
});


/*const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API rodando 🚀 top, top!");
});

app.get("/dados", (req, res) => {
  res.json({ mensagem: "Olá do backend do Inferno!" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor rodando");
});
*/