///ejercicio servir un sitio web completo - parte 1
/**
 * en este ejercicio se brinda una plantilla de un sitio web completo para que el 
 * backend lo pueda servir cuando el cliente quiera ese recurso
 */

/**
 * para realizar este ejercicio es necesario descargar la plantilla
 * 1 agregar los archivos del sitio web a una carpeta en el directorio raiz llamada public2
 * 2 agregar un Middelware para que se utilice la carpeta public2
 * 3 ejecutar la aplicacion y analizar lo que sta pasadno
 */


const express = require('express')
const app = express()
const port = 8080

//Servir contenido estatico public2 donde esta el templated busca el iindex pagaina principal
app.use(express.static('public2'))
//realiza lo mismo 
app.get('/', (req, res) => {
    res.send('Home Page ')
})  

app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo en su respectiva ruta')
})

app.get('*', (req, res) => {
    res.sendFile(__dirname +'/public/404.html')
})

app.listen(port, () => {
    console.log(`Example ápp listening at http://localhost${port}`);
})

/**
 * Ejecutar esta aplicacion con node
 * visitar en el navegador la direccion http://localhost:8080
 * porque se despliega el sitio web, respuesta tecnica, caracteristicas tiene la url?
 * poque no se despliegan las opciones de la pagina "generic" y "elements"?
 */