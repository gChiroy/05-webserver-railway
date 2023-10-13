/**
 * ------Ejercico servir un sitio web completo 
 * una vez implementada nuestra plantilla, anallizamos varias cosas que suceden
 * en este ejemplo una de ellas es que al momento de ejecutar la apliacion y visitar
 * siitio web si se despliega per al momento de ver las otras opciones como 
 * http://localhost:8080/generic o http://localhost:8080/elemnts el webserver
 * no encuentra el recurso para esto haque configurar cada ruta  
 */

const express = require ('express')
const app = express()
const port = 8080


//Servir contenido estatico public2 donde esta el templated
//no hay necesidad de configurar el homepage
app.use(express.static('public2'))

//habilitamos la ruta http://localhost:8080/generic
app.get('/generic', (req, res) => {
    res.sendFile(__dirname +'/public2/generic.html')
})

//habilitamos la ruta elements http://localhost:8080/elements
app.get('/elements', (req, res) => {
    res.send(__dirname +'/public2/elements.html')
})  

//Habilitamos cualquier ruta invalida para que despliegue una pagina de error
app.get('*', (req, res) => {
    res.sendFile(__dirname +'/public/404.html')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost${port}`);
})


/** 
 * ejecutamos con node app11.js
 * aca es necesario probar todas las rutas validas y una ruta invalida 
 * http://localhost:8080
 * http://localhost:8080/generic
 * http://localhost:8080/elements
 * 
 * como es la estructura de estas rutas cuando visitas la homepage y luego desde y alli 
 * visitas las opciones y regresas a la homepage, dar un recorrido completo por 
 * todo el sitio, ananliza tecnicamente que esta pasando?
 */