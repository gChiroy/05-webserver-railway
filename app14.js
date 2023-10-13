/**
 * -------Ejercicio usando parciales (partials) en HBS -----------
 * este ejercicio esta enfocado en la reutilizacion de codigo por medio de 
 * partials. en el ejercico anterior por ejemplo no son funcionales las partes
 * de "generic" y "elements"
 */    

/**
 * --pasos a realizar---------
 * 1 crear una carpeta llamada partials dentro de views
 * 2 agregar el codigo con hbs.RegisterPartials el registros de la carpeta partials
 * 3 dentro de partials crear un archivo llamado como header.hbs
 * 4 cortar el codigo de home2.hbs de la parte del header y pegarlos en headers.hbs
 * nota: como modificamos el codigo de home2.hbs se vera reflejado en home3.hbs
 */

    const express = require('express')
    const hbs = require('hbs')

    const app = express()
    const port = 8080


    //utilizacion de handlebars para el renderizado de la pagina web 
    app.set('view engine', 'hbs')

    //uso de parciales "codigo que se repite en mas de un lugar o paginas web"
    hbs.registerPartials(__dirname + '/views/partials')

    //servir contenido estatico public3 donde esta el templated
    app.use(express.static('public3'))

    /**
     * Envinado objeto a home3.hbs pagina renderizada res.render
     * Esta pagina tiene aplicda partials
     * 
     */
    app.get('/', (req, res) => {
        res.render('home3', {
            nombre: 'Gilda Chiroy',
            titulo: 'Curso de node'
        })
    })
/**
 * Enviando obejto a generic.hbs, pagina renderizada res.render
 * Esta pagina tiene aplicada partials
 */
    app.get('/generic', (req, res) => {
        res.render('generic', {
            nombre: 'Gilda Chiroy',
            titulo: 'Curso de node'
        })
    })

    /**
     * Enviando objeto a elements.hbs, pagina renderizada res.render
     * esta pagina tiene aplicada partials 
     */
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