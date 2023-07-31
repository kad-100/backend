const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Route to add a product (POST /api/products/addProduct)
router.post('/addProduct', productController.addProduct);

module.exports = router;
