// ************ Express and Router ************
const express = require('express');
const router = express.Router();
const {check} = require('express-validator');
// ************ Controllers *********
const userController = require('../controllers/userController');
const validateRegister = [
    check('name')
        .notEmpty().withMessage('Debes completar el Nombre y Apellido').bail()
        .isLength({min: 5}).withMessage('El campo debe tener al menos 5 caracteres'),
    check('email')
        .notEmpty().withMessage('Debes completar el Email').bail()
        .isLength({min:5}).withMessage('El campo debe tener al menos 5 caracteres')
        .isEmail().withMessage('Debe ser un Email válido'),
    check('password')
        .notEmpty().withMessage('Debes completar la contraseña').bail()
        .isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres'),
]

// ************ Dirs *********
router.get('/', userController.list);
router.get('/login', userController.login);
router.get('/register', userController.register);
router.post('/register', validateRegister, userController.processRegister)
router.get('/show/:id', userController.show);
router.get('/create', userController.create);
router.post('/save', userController.save);
router.get('/edit/:id', userController.edit);
router.post('/update/:id', userController.update);
router.post('/delete/:id', userController.delete);


module.exports = router;