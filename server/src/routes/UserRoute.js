const express = require('express');
const router = express.Router();
const { CreateUserController } = require('../controllers/UserController');

router.post('/CreateUser', CreateUserController);


module.exports = router;