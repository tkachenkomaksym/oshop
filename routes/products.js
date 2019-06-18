var express = require('express');
var router = express.Router();

let products = require('../controllers/products');

/* GET products page. */
router.get('/products', products.get_products);

module.exports = router;
