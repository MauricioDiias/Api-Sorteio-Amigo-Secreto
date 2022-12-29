const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

const rotaV2Sorteio = require("./routes/--v2Sorteio");
const rotaV3Sorteio = require("./routes/--v3Sorteio");
app.use(cors())
app.use(morgan("dev"));
app.use(bodyparser.urlencoded({ extended: false })); //apenas dados simples
app.use(bodyparser.json()); // json de entrada no body

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.header(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).send({});
  }
  next();
});
//Rotas
app.use("/v2-sorteio", rotaV2Sorteio);
app.use("/v3-sorteio", rotaV3Sorteio);

//Quando não encontra a rota
app.use((req, res, next) => {
  const erro = new Error("Não encontrado!");
  erro.status = 404;
  next(erro);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.send({
    erro: {
      menagem: error.message,
    },
  });
});

module.exports = app;
