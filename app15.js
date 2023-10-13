/**
 * -------------Ejercicio - prepara el webserver para subirlo a un hosting
 * 1 crear varible de entorno instarlar npm i dotenv
 * 2 crear en la raiz un archivo llamado .env configurar el puerto 8081
 * 3 en este archivo principal agregar el require('dotenv').config();
 * 4 en este archivo principal agregar const port = process.evn.PORT
 * 5 y en el listen utilizar la variable const port
 * 6 especificar en el archivo package.json en script el comando
 * "start": ""node app15.js
 * 7 para verificar si funciona el script ejecutar el comando npm start
 * 8 crear archivo .gitignore y agregar en gitignore node_modules/
 * 9 git init -- si es la primera vez que se inicializa 
 * 10 git .add --este es para tomar un tipo snapshot
 * 11 git commit -m "primer commit - webserver listo"
 * 12 git push
 */

/**
 * Debemos de arreglar un poco el codigo, por ejemplo tenemos declaro el puerto
 * y seguramente en el hosting que elijamos no este ese puerto 8080 disponible 
 * 
 */
const express = require('express')
const hbs = require('hbs')
require('dotenv').config();

const app = express()
const port = process.env.PORT 

/**
 * ------------pasos para desplegar la aplicacion en Railway.app-------------
 * 1 registrarse en Github 
 * 2 crear cuenta en railway.app version Trial con la cuenta de github o corre
 * 3 ir al corre registrado y verificar la cuenta 
 * 4 git init 
 * 5 git add .
 * 6 git commit -m "webserver listo"
 * 7 ir a Github y crear un repositorio 05-webserver-railway
 * 8 copiar los comando en Git Hub 
 * git remote add origin http://github.com/
 * git branch -M main 
 * git push -u origin main 
 * 9 railway--new project GitHub repor --buscar el proyecto --deploy now
 * 10 ir a settings -- click Generate Domain -- probar la url dada
 */

//utilizacion de Handlebars hbs para el renderizado de la pagina web
app.set('view engine', 'hbs')

//uso de parciales "codigo que se repite en mas de un lugar o paginas web"
hbs.registerPartials(__dirname +'/views/partials')

//Servir contenido estatico public3 donde esta el templated
app.use(express.static('public3'))

//enviando argumentos a home3
app.get('/', (req, res) => {
    res.render('home3', {
        nombre: 'Gilda Chiroy',
        titulo: 'Curso de node'
    })
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Gilda Chiroy',
        titulo: 'Curso de node'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Gilda Chiroy',
        titulo: 'Curso de node'
    })
})

app.get('/generic', (req, res) => {
    res.sendFile(__dirname +'./public3/generic.html')
})

app.get('/elements', (req, res) => {
    res.send(__dirname +'./public3/elements.html')
})  


app.get('*', (req, res) => {
    res.sendFile(__dirname +'/public/404.html')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost${port}`);
})

