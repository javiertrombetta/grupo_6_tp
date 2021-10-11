
// ************ Path and filesystem ************
//const path = require('path');
//const fs = require('fs');


// ************ Controller render Views ************
const mainController = {
    index: (req, res, next)=>{
        res.render('index', {pageTitle: 'netForAll'});
    }
    
}

module.exports = mainController;