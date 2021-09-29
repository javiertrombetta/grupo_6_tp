const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

const routesMain = require('./routes/main.js');
const routesServices = require('./routes/services.js');
const routesUsers = require('./routes/users.js');
const routesCart = require('./routes/cart.js');




app.listen(port, ()=>{
    console.log('Servidor corriendo en http://localhost:3000/');
});

app.use('/', routesMain);
app.use('/servicios', routesServices);
app.use('/carrito', routesCart);
app.use('/registro', routesUsers);
app.use('/login', routesUsers);



/*
app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});
app.get('/servicios', (req,res)=>{
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
*/