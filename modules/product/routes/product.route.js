const express = require('express');
const router = express.Router();

// Require the controllers!!
const product_controller = require('../controllers/product.controller');


// create user
router.post('/create', product_controller.product_create);
// read user
router.get('/:id', product_controller.product_details);
// get products
router.get('/', product_controller.get_products);

module.exports = router;
