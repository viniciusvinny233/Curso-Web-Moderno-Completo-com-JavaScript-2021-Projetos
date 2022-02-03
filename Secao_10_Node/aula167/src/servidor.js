const porta = 3003

const express = require('express')
const app = express()

app.get('/produtos', (req, res, next) =>{
    res.send({Nome: "Marcos Vinicius", Altura: 1.76})
})

app.listen(porta, () => {
    console.log(`O servidor está no ar na porta: ${porta}`)
})