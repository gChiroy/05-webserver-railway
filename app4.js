/**instalar en este proyecto express  npm i express*/

const express = require('express')
const app = express()
//metodo regresa a raiz para habilitar rutas
app.get ('/', function name(req, res) {
    res.send('Hola mundo ')
})

app.listen(8080);