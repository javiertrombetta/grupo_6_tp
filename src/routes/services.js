const express = require('express');
const router = express.Router();

const servicesController = require('../controllers/servicesController');

router.get('/servicios', servicesController.list);

// router.get('/:idService', servicesController.description);

// router.get('/:idService/details/:Details?', servicesController.details);

module.exports = router;