const router = require('express').Router();
const stockController = require('../controleur/stock.controller');


router.get('/', stockController.getStock);

module.exports = router;