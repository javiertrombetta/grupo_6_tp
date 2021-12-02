// ************ Express and Router ************
const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const guestMiddleware = require('../middleware/guestMiddleware')
const authMiddleware = require('../middleware/authMiddleware')
// ************ Controllers *********
const userController = require('../controllers/userController');

const validateRegister = [
    body('name')
        .notEmpty().withMessage('Debes completar el Nombre').bail()
        .isLength({min: 5}),
    body('last_name')
        .notEmpty().withMessage('Debes completar el Apellido').bail()
        .isLength({min: 5}),
    body('email')
        .notEmpty().withMessage('Debes completar el email').bail()
        .isEmail().withMessage('Debes escribir un email válido')
        .isLength({min: 5}).withMessage('El email debe tener al menos 5 caracteres'),
    body('password')
        .notEmpty().withMessage('Debes completar la Contraseña').bail()
        .isLength({min:5}).withMessage('La contraseña debe tener al menos 5 caracteres')
]

// ************ Dirs *********
router.get('/', userController.list);
router.get('/login', guestMiddleware, userController.login);
router.post('/login',userController.processLogin);
router.get('/register', guestMiddleware, userController.register);
// ******* Procesar Fomulario Registro ********
router.post('/register', validateRegister, userController.processRegister)
router.get('/show/:id', userController.show);
router.get('/create', userController.create);
router.post('/save', userController.save);
router.get('/edit/:id', userController.edit);
router.post('/update/:id', userController.update);
router.post('/delete/:id', userController.delete);
router.get ('/profile', authMiddleware, userController.showProfile);
router.get('/logout', userController.logout);

module.exports = router;