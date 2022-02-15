const express = require('express'); //Se obtiene el Modulo pre construido del Framework Express (Node.Js)
const request = require('request'); 
const app = express();

//Middleware for Welcome to Server (Bievenida al Servidor)
// app.all('/',(req,res)=>{
//     console.log('Server Received'); //Servidor Recibido 
// })


function randomNumber(min, max) {
    return Math.floor((Math.random() * (max - min)) + min);
}

//Proxy Connection to XKCD API 
app.get('/', (req,res) => {
    const ramdon = randomNumber(1,700);
    const url = `https://xkcd.com/${ramdon}/info.0.json`;
    console.log('Conexion Establecida');
    request(url).pipe(res);
   
})
 

app.listen(3001, () => {
    console.log('Servidor Running');
});

// app.use(express.static('./public/')); //Middleware encargado de acceder a un archivo de la ruta 