const express = require("express")
const router = express.Router()

router.post('/', (req,res,next) => {
    let participantes = req.body.listaDeUsuarios;

    res.send(participantes);
})

module.exports = router;