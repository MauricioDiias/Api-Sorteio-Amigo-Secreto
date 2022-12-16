const porta = 3003;
const cors = require("cors");

const express = require("express");
const app = express();
const bancoDeDados = require("./bancoDeDados");

app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.post("/sort", (req, res, next) => {

  let array = req.body.nomes
  console.log("linha 21=",array)
  let sorteados =bancoDeDados.sortear(array)
  res.send(sorteados);


  // return { status: 200, data: sorteados }; //JSON
});
app.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}`);
});
