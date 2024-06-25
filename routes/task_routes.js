const express = require('express');

const router = express.Router();


const taskController = require('../controllers/taskController');

router.post('/task/add', taskController.addTask);

router.get('/tasks', taskController.getTasks);

router.get('/task/:id', taskController.getTaskById);

router.put('/task/edit/:id', taskController.updatedTask);

router.delete('/task/delete/:id', taskController.removeTask);



module.exports = router;