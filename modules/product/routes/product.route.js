const express = require('express');
const router = express.Router();

// Require the controllers!!
const product_controller = require('../controllers/product.controller');


// create products
router.post('/create', product_controller.product_create);
// read products
router.get('/:id', product_controller.product_details);
// read products by category
router.get('/category/:categoryname', product_controller.get_products_category);
// get products
router.get('/', product_controller.get_products);

module.exports = router;
