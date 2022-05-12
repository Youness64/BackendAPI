const express = require('express');
const router = express.Router();
const stockController = require('../controleur/stock.controller');


router.get('/', stockController.getStock);

module.exports = router;