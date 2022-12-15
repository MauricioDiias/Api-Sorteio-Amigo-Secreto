const porta = 3003;

const express = require("express");
const app = express();
const bancoDeDados = require("./bancoDeDados");
// const bodyParser = require('body-parser')
app.use(express.json());

app.post("/sorteio", (req, res, next) => {
  const sorteio = bancoDeDados.salvarNomes({
    nomes: req.body.nomes
  });
    let nomesSorteio = Object.values(sorteio)
    
    bancoDeDados.sortear(nomesSorteio)
    console.log(nomesSorteio);
    // res.send("sorteio efetuado");
    res.send(nomesSorteio) //JSON
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
