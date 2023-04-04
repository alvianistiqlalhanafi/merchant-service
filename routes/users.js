const express = require('express');
const UserController = require('../controller/users');
const router = express.Router();
router.use(express.json())

// READ - GET
router.get('/', UserController.getAllUsers);

// CREATE - POST
router.post('/', UserController.createNewUsers);

// DELETE - DELETE
router.delete('/:idUser', UserController.deleteUsers);


module.exports = router