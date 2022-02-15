const express = require('express'); //Se obtiene el Modulo pre construido del Framework Express (Node.Js)
const request = require('request'); 
const cors = require('cors'); //Permisos CORS para el Proxy 
const app = express();

app.use(cors());

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

