//Eejrcicio sirviendo mas de un contenido estatico
/**
 *este ejercicio va enfocado en validar contenido estatico a servir en el path
 de la carpeta public
 */

const express = require('express')
const app = express()
const port = 8080

//servir contenido estatico, de la pagina principal http://localhost:8080
app.use(express.static('public'))

//Para servir en la ruta http://localhost:8080/hola-mundo
app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo en su respectiva ruta')
})

//para seervor en cualquier ruta invalida http://localhost:8080/invalida
//__dirname+ path completo absoluto del recurso a desplegar
app.get('*', (req, res) => {
    res.sendFile(__dirname +'/public/404.html')
})

//metodo callback para habilitar el servidor web en el puerto 8080
app.listen(port, () => {
    console.log(`Example ápp listening at http://localhost${port}`);
})

/**
 * Al ejecutar esta aplicacion es necesario darse cuetna de lo que ha 
 * cambiado el despliegue de recursos segun su ruta
 * 
 * por ejemplo para la peticion HTTP del http://localhost:808
 * el webserver busca en el Middle=ware enfocado en plublic y busca automaticamente
 * el archivo index.html
 * qu hace el web server con las peticiones http://localhost:8080/hola-mundo y 
 * http://localhost:8080/invalidad, que tipo de recurso se responde
 */