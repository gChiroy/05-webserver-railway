/**
 * -------------Ejercico utilizar Hadlebars------
 * el sitio web como se encuentra actualmente es totamente estatico es decir que 
 * si queremos modificar ciertas cosas, nostros tenemos que modificar directamente
 * desde el HTML, si queremos volver este sitio web semidinamico se puede aplicar
 * al template HANDLEBARS un paquete de tercero en NPM muy popular que sirve para 
 * poder renderizar el sitio web y enviarselo de esa forma al cliente. 
 * Se recomienda utlizar handlebars para sitios web sencillos, pero para sitios 
 * complejos se recomienda utliizar Frameworks complejos como Angular, Veu, React
 */

/**
 * Busacar en la pagina de NPM el paquete handlebars o visitar el sitio
 * https://www.npmjs.com/package/handlebars
 * para instalar el paquete utiliza si tieene que buscar la instalacion hbs
 * especificamente para express verificar el codig en GITHUB
 * 
 * npm install hbs 
 * 
 * el objetivo de hbs es pre-rendirar las paginas con hbs y enviarle al cliente
 * un sitio web totalmente renderizado, esto me ayuda a poder por ejemplo
 * reutilizar codigo como por ejemplo el de la barra de opciones y otras
 * partes de las paginas web a nivel de vistas
 * 
 * tenemos que tener en cuenta cosas que no vamos a renderizar como por ejemplo
 * los assests como css, js y las imagenes
 * el objetivo de hbs es tamien seprar el modelo, la vista y el contralador 
 * es decir aplicar el famoso MVC 
 */

const express = require('express')
const app = express()
const port = 8080
/**
 * -----Instrucciones para crear todo este ejercicio-----
 * 1crear carpeta public3 en la raiz, crear una subcarepta llamada template
 * 2 cortar todo los archivos del sitio web y pasarlos a la carpeta template
 * como backup del sitio, se necesitaran para tomar el codigo HTML 
 * 3 utlizar en este codigo el tempalte engine que es agregar al codigo de esta 
 * app la linea app.set('view engine', 'hbs')
 * 4 crear en la raiz la carpeta views, dentro de esta carpeta crear home.hbs
 * 5 copiar todo el contenido del index.html y pegarlo en home.hbs con eso ya 
 * poseemos la capacidad de reutilizar el codigo como los headers, el menu (nav)
 * o el footer 
 * 6 modificar el home.hbs en sus links principales para no utilizar. html 
 */

//utilizacion de hbs para el renderizado de la pagina web
app.set('view engine', 'hbs')

/**
 * Este archivo necesita crear la carpeta public3, todos los archivos del templated
 * se trasladaran a la carpeta de template para hacer un backup
 * y poder empezar el trabajo de hbs (handlebars) para renderizar el sitio semi estatico 
 * al momento de compilar el app12.js el sitio estara roto y saldra la pagina de error 
 * el hbs me da la capacidad de reutilizar codigo
 * 
 */
///Servir contenido estatico public3 donde est el templated
app.use(express.static('public3'))


//controlador de la ruta principal 
app.get('/', (req, res) => {
    res.render('home')
})

app.get('/generic', (req, res) => {
    res.sendFile(__dirname +'./public3/template/generic.html')
})

app.get('/', (req, res) => {
    res.send(__dirname +'/public3/template/elements.html')
})  


app.get('*', (req, res) => {
    res.sendFile(__dirname +'/public/404.html')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost${port}`);
})

///para ejecutar esta aplicacion se tiene que utilizar node app12.js 
/** 
 * en este momento ya tenemos renderizado la homepage pero aun no hemos
 * renderizado las demas partes de la pagina es decir sus opcioens de 
 * elements y generic
 * visitar el sitio web http://localhost:8080 
 * el beneficio en este punto, es que ya podemos tener la capacida de 
 * reutilizar codigo
 */