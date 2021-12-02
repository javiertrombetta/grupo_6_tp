const { name } = require('ejs');
const fs = require('fs');
const bcryptjs = require('bcryptjs');
let db = require('../database/models')

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
    showProfile: (req,res)=>{
        res.render('../views/users/profile.ejs', {user: req.session.userLogged})
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
    processLogin: (req,res)=>{
         db.User.findOne({where: {email: req.body.email}})
             .then(function(userLog){
                 if (userLog && bcryptjs.compareSync(req.body.password , userLog.password)){
                     req.session.userLogged = userLog;

                    if (req.body.remember_user) {
                        res.cookieParser('userEmail', req.body.email, {maxAge: (1000*60)*60})
                    }

                     res.redirect('/users/profile')
                 }else{
                     res.render('../views/users/login.ejs',{
                         errors: {
                             msg: "Los datos ingresados son incorrectos"
                         }
                     })
                 }
                
             })
             
        
    },
    processRegister: (req,res)=>{
        const {validationResult} = require('express-validator');
        const errors = validationResult(req);

        db.User.findOne({where: {email: req.body.email}})
            .then(function(user){
                if(user){
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
                    let hashPassword = bcryptjs.hashSync(req.body.password, 10);
                    console.log(req.body)
                    db.User.create({
                        name: req.body.name,
                        last_name: req.body.last_name,
                        email: req.body.email,
                        password: hashPassword
                    });
                }else{
                    res.render('../views/users/register.ejs', { errors: errors.errors , old: req.body});
                }
            })
    },
    logout: (req,res)=>{
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    } 
}
module.exports = userController;