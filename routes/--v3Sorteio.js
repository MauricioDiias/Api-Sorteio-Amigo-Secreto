const express = require("express")
const router = express.Router()

router.post('/', (req,res,next) => {
    let participantes = req.body.listaDeUsuarios;
      res.status(201).send(participantes);
    
})

//Visualiza nomes
router.get("/", (req, res, next) => {
    let participantes = req.body.listaDeUsuarios;
 
        return res.status(200).send( participantes );
      });
module.exports = router;