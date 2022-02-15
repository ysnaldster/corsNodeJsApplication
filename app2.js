const express = require('express');
const app2= express();

app2.get('/client',(req,res)=>{
    res.send('Front-end')
})

app2.listen(3002,()=>{
    console.log('Servidor 2 Corriendo');
})

app2.use(express.static('./public/')); //Middleware encargado de acceder a un archivo