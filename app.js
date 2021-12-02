// ************ Requires ************
const express = require('express');
const path = require('path');
const session = require('express-session');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const userLogger = require('./middleware/userLogger');
const adminMiddleware = require('./middleware/adminMiddleware');


// ************ Routes declare ************
const index = require('./routes/index');
const products = require('./routes/products');
const users = require('./routes/users');
const admin = require('./routes/admin');

// ************ Middleware declare ************

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
app.use(session({
    secret: 'este es el secreto de net4all',
    resave: false,
    saveUninitialized: false
}));
app.use(cookieParser());
app.use(userLogger)
app.use(adminMiddleware)

// ************ Routes manager ************
app.use('/', index);
app.use('/users', users);
app.use('/products', products);
app.use('/admin', admin);

// ************ catch 404 and forward to error handler ************
app.use( (req, res, next) => {
    next(createError(404));
});
  
// ************ error handler ************
app.use( (err, req, res, next) => {

    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV === 'development' ? err : {};
  
    res.status(err.status || 500);
    res.json({
        status:false,
        errors: {
            code: err.code,
            message: err.message
        }
    });
  
});

module.exports = app;