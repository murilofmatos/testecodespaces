import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.get("/", (req, res) => {
  res.json({ message: "API rodando 🚀" });
});

// Exemplo de rota de API
app.post("/hello", (req, res) => {
  let userName = req.body.name;
  res.json({ message: "Olá, " + userName + "!" });
});

// Inicializa servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
