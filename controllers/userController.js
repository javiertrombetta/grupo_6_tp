const { name } = require('ejs');
const fs = require('fs');
const User = require('../models/User');
const bcryptjs = require('bcryptjs');

const userController = {
    list: (req, res)=>{
        let users = ['Javier','Fermin','Nico','Julidom','Julitob']
        res.render('../views/users/userList.ejs', {'users': users});
    },
    login: (req, res)=>{
        res.render('../views/users/login.ejs');
    },
    register: (req, res)=>{
        res.render('../views/users/register.ejs');
    },
    show: (req, res)=>{
        res.render('../views/users/register.ejs');
    },
    create: (req, res)=>{
        res.render('../views/users/register.ejs');
    },
    save: (req, res)=>{
        res.render('../views/users/register.ejs');
    },
    edit: (req, res)=>{
        res.render('../views/users/register.ejs');
    },
    update: (req, res)=>{
        res.render('../views/users/register.ejs');
    },
    delete: (req, res)=>{
        res.render('../views/users/register.ejs');
    },
    processRegister: (req,res)=>{
        const {validationResult} = require('express-validator');
        const errors = validationResult(req);

        let userInDB = User.findByField('email', req.body.email);
        if(userInDB){
            return res.render('../views/users/register.ejs', {
                errors: {
                    email:{
                        msg: 'Este email ya esta registrado'
                    }
                },
                old: req.body});
        }

          if(errors.isEmpty()){
              res.redirect('/');
              User.create(req.body);
          }else{
              res.render('../views/users/register.ejs', { errors: errors.errors , old: req.body});
          }
    }
}
module.exports = userController;