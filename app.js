
//Se requiere el paquete http
const http = require('http')///importa modulo http

//creando el WebServer
//req solicita
//res respuesta
http.createServer((req, res) => {

    res.write('Hola mundo');
    res.end();//finaliza 
})
.listen(8080)//puerto donde se viusalizara la pagina

console.log('Escuchando el puerto', 8080);