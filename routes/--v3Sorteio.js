const express = require("express")
const router = express.Router()
const api = require("../controller/raffleFriend")

router.post('/', (req,res,next) => {
    let participantes = req.body.listaDeUsuarios;
    resultadoDeQuemPegouQuem = api.sortearNomes(participantes);
    console.log("resltado",resultadoDeQuemPegouQuem);
    return res.status(200).send(resultadoDeQuemPegouQuem);
})

//Visualiza nomes
router.get("/", (req, res, next) => {
    let participantes = req.body.listaDeUsuarios;
 
        return res.status(200).send( participantes );
      });
module.exports = router;