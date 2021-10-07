// ************ Require's ************
const express = require('express');
const router = express.Router();
// ************ Controller Require ************
const mainController = require('../controllers/mainController');

router.get('/', mainController.index); 
router.get('/carrito', mainController.carrito);

module.exports = router;