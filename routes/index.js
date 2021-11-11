// ************ Express and Router ************
const express = require('express');
const router = express.Router();

// ************ Controllers *********
const mainController = require('../controllers/mainController');


// ************ Dirs *********
router.get('/', mainController.index); 
//app.use('/users' , mainController.);


module.exports = router;