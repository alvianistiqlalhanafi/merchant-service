const express = require('express');
const productController = require('../controller/products');
const router = express.Router();
router.use(express.json())

// READ - GET
router.get('/', productController.getAllProduct);

// CREATE - POST
router.post('/', productController.createNewProduct);

// UPDATE - PUT
router.put('/:idProduct', productController.updateProduct);

// DELETE - DELETE
router.delete('/:idProduct', productController.deleteProduct);


module.exports = router