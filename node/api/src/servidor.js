const porta = 3003;
let teste;

const express = require("express");
const app = express();
const bancoDeDados = require("./bancoDeDados");
// const bodyParser = require('body-parser')

app.use(
  express.urlencoded({
      extended:true,
  }),
)

app.use(express.json());

app.post("/sort", (req, res, next) => {
  const sorteio = bancoDeDados.salvarNomes({
    nomes: req.body.nomes,
  });
  let nomesSorteio = Object.values(sorteio);

  teste = nomesSorteio[0].map((values) => {
    return values;
  });

  res.send(bancoDeDados.sortear(teste));

  return { status: 200, data: teste }; //JSON
});

app.get("/ola", (req, res, next) => {
  res.send(bancoDeDados.sortear(teste));
  return { status: 200, data: teste }; //JSON

});

app.get("/sortLista", (req, res, next) => {
  res.send(bancoDeDados.getNomes());
});

app.get("/sortLista/:id", (req, res, next) => {
  res.send(bancoDeDados.getNome(req.params.id));
});

app.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}`);
});
