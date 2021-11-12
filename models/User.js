const fs = require('fs');
const bcryptjs = require('bcryptjs');

const User = {
    fileName: './database/users.json',
    
    getData: function(){
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'))
    },

    findAll: function(){
        return this.getData();
    },

    generateId: function(){
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if(lastUser){
            return lastUser.id + 1;
        }
        return 1;
    },

    findByPk: function(id){
        let allUsers = this.findAll();
        let userFound = allUsers.find(user=>{
            user.id===id;
        });
        return userFound;
    },
    findByField: function(field, text){
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field]=== text);
        return userFound;
    },
    create: function (userData){
        let allUsers = this.findAll();
        let newUser = {
            ...userData,
            id: this.generateId(),
            password: bcryptjs.hashSync(userData.password, 10)
        }
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '))
        return true
    },
    delete: function(id){
        let allUsers = this.findAll;
        let finalUsers = allUsers.filter(userId=>{
            userId.id !== id;
        })
    fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '))
    }
}
module.exports = User;