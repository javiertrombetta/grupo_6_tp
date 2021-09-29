const express = require('express');
const router = express.Router();

const servicesController = require('../controllers/servicesController.js');

app.get('/servicios', (req,res)=>{
    res.sendFile(__dirname + '/views/productDetail.html');
});



router.get('/:idService', servicesController.description);

router.get('/:idService/details/:Details?', servicesController.details);

module.exports = router;