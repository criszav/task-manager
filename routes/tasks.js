const express = require('express');
const router = express.Router();
const taskController = require('../controllers/tasks');


// Getting all the tasks list
router.route('/').get(taskController.getAllTasks);

// Getting one specific task
router.route('/:id').get(taskController.getOneTask)

// Create a new task
router.route('/').post(taskController.createTask);

// Edit a task
router.route('/:id').put(taskController.updateTask);

// Delete a task
router.route('/:id').delete(taskController.deleteTask);


module.exports = router;