/**
 * npm init -y
 * node i express
 * 
 * 
 * response responde al usuario
 * require todo lo que el usuario neccesita
 */
const http = require('http')


//codigo de estado HTTP que se enviara en la respuesta, 
//404 no encontrado, 500 error en el servidor 
http.createServer((req, res)=>{
    console.log(req);
    res.writeHead(200, {'Content-Type': 'application/json'})
    const persona = {
        id: 1, 
        nombre: 'Gilda'
    }
    res.write(JSON.stringify(persona));//escribira el contenido del objeto
    res.end();
})

.listen(8080)

console.log('Escuchando el puerto ', 8080);



