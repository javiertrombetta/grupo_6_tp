const db = require('../database/models');

const adminController = {
    home: (req,res)=>{
        res.render('admin/adminHome.ejs')
    },
    crear: (req,res)=>{
        res.render('admin/adminCreateProducts');
    },
    editar: (req,res)=>{
        db.Plan.findAll()
            .then(function(planes){
                res.render('admin/adminEditProducts', {planes: planes});
            })
    },
    borrar: (req,res)=>{
        db.Plan.findAll()
            .then(function(planes){
                res.render('admin/adminDeleteProducts', {planes: planes});
            })
    },
    verUsuarios: (req,res)=>{
        db.User.findAll()
            .then(function(usuarios){
                res.render('admin/allUsers',{usuarios:usuarios});
            })
    },
    verPlanes: (req,res)=>{
        db.Plan.findAll()
            .then(function(planes){
                res.render('admin/allPlanes', {planes:planes});
            })
    },
    procesoCrear: (req,res)=>{
        db.Plan.create({
            nombre_plan: req.body.nombre_plan,
            velocidad_descarga: req.body.velocidad_descarga,
            velocidad_subida: req.body.velocidad_subida,
            atencion_cliente: req.body.atencion_cliente,
            wifi: req.body.wifi
        })
        res.redirect('/admin/verPlanes')
    },
    procesoEditar: (req,res)=>{
        db.Plan.update({
            nombre_plan: req.body.nombre_plan,
            velocidad_descarga: req.body.velocidad_descarga,
            velocidad_subida: req.body.velocidad_subida,
            atencion_cliente: req.body.atencion_cliente,
            wifi: req.body.wifi
        },{
            where: {id: req.body.plan_a_editar}
        })
        res.redirect('/admin/verPlanes')
    },
    procesoBorrar: (req,res)=>{
        db.Plan.destroy({where: {id: req.body.plan_a_borrar}})
        res.redirect('/admin/verPlanes')
    }
}
module.exports=adminController;