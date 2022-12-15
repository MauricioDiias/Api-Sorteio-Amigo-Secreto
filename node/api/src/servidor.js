const porta = 3003;

const express = require("express");
const app = express();
const bancoDeDados = require('./bancoDeDados')

app.get("/list", (req, res, next) => {
  res.send([
    ["Ariane"],
    ["Lyndi"],
    ["Jamile"],
    ["Erisson"],
    ["Wedicarlos"],
    ["Rodrigo"],
    "Jairlaine",
    "Blenda",
    "Raniele",
    "Julio",
    "Tawane",
    "Jean",
    "fabio",
    "Mauricio",
  ]);
});
app.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}`);
});
