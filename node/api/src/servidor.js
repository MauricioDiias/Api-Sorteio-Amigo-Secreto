const porta = 3002

const express = require('express')
const app = express()

app.get('/list', (req,res,next) => {
    res.send({nome: 'Melissa', id:0})
})
app.listen(porta, () => {
    
    console.log(`Servidor executando na porta ${porta}`)
})