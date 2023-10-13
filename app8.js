//Ejercico servir contenido estatico 
//el ejercicio va enfocado a sustitiurir la impresion de mensajes en las rutas por
//contenido estatico, en este caso paginas web

const express = require('express')
const app = express()
const port = 8080

/**
 * Se creo carpeta public y dentro del index.html 
 * se creara un Midlware para habilitar ruta al index.html
 */

/**
 * para servir contenido estatico debemos indicarle a la aplicacion cual es
 * la carpeta donde se almacenaran las paginas web, por medio de un middleware
 * en este caso el middlware app.use(express.static('public))
 */

//Middlware para la carpeta publica
//servir contenido estatico, de la pagina principal http://localhost:8080
app.use(express.static('public'))
//este es un path estatico 


//get maneja solicitudes /indica la raiz
app.get('/', (req, res) => {
    res.send('Home page')
})

//Para servir en la ruta http://localhost:8080/hola-mundo
///app get para habilitar rutas
app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo en su respectiva ruta')
})

app.get('*', function (req, res) {
    res.send('404 | Page not found')
})

app.listen(port, () => {
    console.log(`Example ápp listening at http://localhost${port}`);
})