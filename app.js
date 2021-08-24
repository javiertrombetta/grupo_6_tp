const express = require('express');
const app = express();
app.use(express.static('public'));


app.listen(3000, ()=>{
    console.log('Servidor corriendo en http://localhost:3000/');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});
app.get('/producto', (req,res)=>{
    res.sendFile(__dirname + '/views/productDetail.html');
});
app.get('/carrito', (req,res)=>{
    res.sendFile(__dirname + '/views/productCart.html');
});
app.get('/registro', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});
app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});