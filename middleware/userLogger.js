const db = require("../database/models");

function userLogger(req,res,next) {
    res.locals.isLogged = false;

    let emailInCookie = req.cookies.userEmail;

    if(emailInCookie){
        db.User.findOne({where: {email: emailInCookie}})
            .then(function(user) {
                if(user){
                    req.session.userLogged = user;
                }
            })
    }
    if (req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }
    next();
}
module.exports = userLogger;