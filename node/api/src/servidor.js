const porta = 3003;

const express = require("express");
const app = express();
const bancoDeDados = require("./bancoDeDados");

app.use(express.json());

app.post("/sorteio", (req, res, next) => {
  const sorteio = bancoDeDados.salvarNomes({
    nomes: req.body.nomes,
  });
  res.send(sorteio) //JSON

  console.log(req.body);

  res.send("sorteio efetuado");
});


app.get('/lista',( req, res, next) => {
  res.send(bancoDeDados.getNomes())
})
app.get('/lista/:id', (req,res,next) => {
  res.send(bancoDeDados.getNome(req.params.id))
})
app.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}`);
});
