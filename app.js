// ************ Requires ************
const express = require('express');
const path = require('path');

// ************ Routes declare ************
const index = require('./routes/index');
const products = require('./routes/products');
const users = require('./routes/users');


const port = process.env.PORT || 3000;
const app = express();

//************ Listen port ************
app.listen(port, ()=>{
    console.log('Servidor corriendo en http://localhost:3000/');
});

// ************ View engine setup ************
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); 
app.set('views', 'views'); 


//************ Defaut dir set ************
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ************ Routes manager ************
app.use('/', index);
app.use('/users', users);
app.use('/products', products);


//module.exports = app;





// app.use('/registro', routesUsers);
// app.use('/login', routesUsers);



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