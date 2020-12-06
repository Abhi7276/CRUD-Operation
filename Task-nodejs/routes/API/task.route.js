var express = require('express');
var router = express.Router();

var TaskController = require('../../controllers/task.controllers');

router.get('/', TaskController.getTasks)

router.post('/', TaskController.createTask);

router.put('/', TaskController.updateTask);

router.delete('/:id', TaskController.deletetask);

module.exports = router;;