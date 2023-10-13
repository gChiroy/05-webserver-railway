/**
 * -----Ejercicio enviando argumentos desde el controlador 
 * instrucciones 
 * 1 crear una copia de home.hbs para home2.hbs 
 * 2 en el controlador de la pagina principal, crear un objeto con las
 * propiedad nombre:"tu nombre"  titulo: "curso de Node"
 * 3 en el hbs sustitui {{}} las propiedades que queremos desplegar el 
 * home2.hbs examinar el codigo 
 */

const express = require('express')
const app = express()
const port = 8080


//utilizacion de hbs para el renderizado de la pagina web 
app.set('view engine', 'hbs')


//servir contenido estatico public3 donde esta el templated
app.use(express.static('public3'))

//Enviando argumentos desde el controlador al template home2 (pagina renderizada )
app.get('/', (req, res) => {
    res.render('home2', {
        nombre: 'Gilda Chiroy',
        titulo: 'Curso de node'
    })
})

app.get('/generic', (req, res) => {
    res.sendFile(__dirname +'./public3/template/generic.html')
})

app.get('/elements', (req, res) => {
    res.send(__dirname +'/public3/template/elements.html')
})  


app.get('*', (req, res) => {
    res.sendFile(__dirname +'/public/404.html')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost${port}`);
})

/**
 * para ejecutar este programa utilizar el comando node app13.js
 * visitar en el navegador la direccion http://localhost:8080 
 * ¿des desplego el sitio web con alguna modificacion ?
 */