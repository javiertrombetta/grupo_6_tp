const path = require('path');
const fs = require('fs');

const mainController = {
    index: (req,res)=>{
        res.render('index.ejs');
    },
    login: (req,res)=>{
        res.render('login.ejs');
    },
    register: (req,res)=>{
        res.render('register.ejs')
    },
    carrito: (req,res)=>{
        res.render('productCart.ejs')
    }
}

module.exports = mainController;