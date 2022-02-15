const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) =>{
    res.json({mensaje: 'funciona'});
});

app.listen(3001, () =>{
    console.log('API iniciado...');
});