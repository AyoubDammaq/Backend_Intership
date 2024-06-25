const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.post('/user/register', userController.addUser);

router.post('/user/login', userController.login);

router.get('/users', userController.getUsers);

router.get('/user/:id', userController.getUserById);

router.put('/user/edit/:id', userController.updatedUser);

router.delete('/user/delete/:id', userController.removeUser);


module.exports = router;