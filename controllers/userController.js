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
    }    
}
module.exports = userController;