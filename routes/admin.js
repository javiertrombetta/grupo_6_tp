const express = require('express');
const { verUsuarios } = require('../controllers/adminController');
const router = express.Router();
const adminController = require('../controllers/adminController')
const authAdminMiddleware = require('../middleware/authAdminMiddleware');

router.get('/',authAdminMiddleware, adminController.home)
router.get('/crear',authAdminMiddleware, adminController.crear)
router.post('/crear',adminController.procesoCrear);
router.get('/editar',authAdminMiddleware, adminController.editar)
router.post('/editar', adminController.procesoEditar)
router.get('/borrar',authAdminMiddleware, adminController.borrar)
router.post('/borrar', adminController.procesoBorrar)
router.get('/verUsuarios',authAdminMiddleware, adminController.verUsuarios)
router.get('/verPlanes', authAdminMiddleware, adminController.verPlanes);

module.exports = router;