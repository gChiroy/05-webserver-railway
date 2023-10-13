

const http = require('http')
//creamos el servidor 
http.createServer((req, res) => {

    res.setHeader('Content-Disposition', 'attachment;filename=lista.csv')
    res.writeHead(200, { 'Content-type': 'application/csv' })

    res.write('id, nombre\n')
    res.write('1, Gilda\n')
    res.write('2, Steve\n')
    res.write('3, Bill\n')
    res.write('4, Dennis\n')
    res.end();
}
)
    .listen(8080)

console.log("Escuchando en el puerto 8080");





