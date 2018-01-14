var express = require('express')

var router = express.Router()

var ToDoController = require('../../controllers/todo.controller');

// Map each API endpoint to the Controller Functions

router.get('/', ToDoController.getTodos)

router.post('/', ToDoController.createTodo)

router.put('/', ToDoController.updateTodo)

router.delete('/:id',ToDoController.removeTodo)

// Export the Router
module.exports = router;