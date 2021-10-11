// ************ Express and Router ************
const express = require('express');
const router = express.Router();

// ************ Controllers *********
const productController = require('../controllers/productController.js');


// ************ Dirs *********
router.get('/', productController.list);
router.get('/cart', productController.cart);
router.get('/show/:id', productController.show);
router.get('/create', productController.create);
router.post('/save', productController.save);
router.get('/edit/:id', productController.edit);
router.post('/update/:id', productController.update);
router.post('/delete/:id', productController.delete);

module.exports = router;