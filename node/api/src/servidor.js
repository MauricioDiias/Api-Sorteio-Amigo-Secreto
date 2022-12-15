const porta = 3003;

const express = require("express");
const app = express();
const bancoDeDados = require("./bancoDeDados");

app.use(express.json());

app.post("/sorteio", (req, res, next) => {
  console.log(req.body);

  res.send("sorteio efetuado");
});
app.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}`);
});
