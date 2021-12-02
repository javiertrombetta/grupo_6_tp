const db = require('../database/models')

function adminMiddleware (req,res,next){
    res.locals.isAdmin = false;
    let adminEmail = 'administradorDH@gmail.com'
    if (req.session.userLogged) {
        if (req.session.userLogged.email == adminEmail) {
            res.locals.isAdmin = true;
            res.locals.adminLogged = req.session.userLogged;
        }
    }
    next();
}
module.exports = adminMiddleware;