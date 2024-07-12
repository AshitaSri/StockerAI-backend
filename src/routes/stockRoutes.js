const express = require('express');
const stockController = require('../controllers/stockController');
const router = express.Router();

router.post('/getSymbol', stockController.getSymbol);

module.exports = router;