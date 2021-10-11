// ************ Express and Router ************
const express = require('express');
const router = express.Router();

// ************ Controllers *********
const userController = require('../controllers/userController');


// ************ Dirs *********
router.get('/', userController.list);
router.get('/login', userController.login);
router.get('/register', userController.register);
router.get('/show/:id', userController.show);
router.get('/create', userController.create);
router.post('/save', userController.save);
router.get('/edit/:id', userController.edit);
router.post('/update/:id', userController.update);
router.post('/delete/:id', userController.delete);


module.exports = router;