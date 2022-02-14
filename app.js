const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.static('./public/'));

app.listen(3000, () =>{
    console.log('Servidor Corriendo');
});