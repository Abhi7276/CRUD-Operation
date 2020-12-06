var TaskService = require('../services/task.service');

// Get/Receiving All Task List
exports.getTasks = async function(req, res, next) {

    var page = req.query.page ? req.query.page : 1;
    var limit = req.query.limit ? req.query.page : 10;

    try {
        var task = await TaskService.getTasks({}, page, limit);
        return res.status(200).json({ status: 200, data: task, message: 'Successfully Tasks Recieved' });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

// Create New Task
exports.createTask = async function(req, res, next) {
    var task = {
        title: req.body.title,
        description: req.body.description,
        assignTo: req.body.assignTo,
        creationDate: req.body.creationDate,
        author: req.body.author
    }

    try {
        var createtask = await TaskService.createTask(task);
        return res.status(200).json({ status: 200, data: createtask, message: "Succesfully Created Task" })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

// Update Task
exports.updateTask = async function(req, res, next) {

    if (!req.body._id) {
        return res.status(400).json({ status: 400., message: "Id must be present" })
    }
    var id = req.body._id;
    console.log('ID', id);
    var task = {
        id,
        title: req.body.title ? req.body.title : null,
        description: req.body.description ? req.body.description : null,
        assignTo: req.body.assignTo ? req.body.assignTo : null,
        creationDate: req.body.creationDate ? req.body.creationDate : null,
        author: req.body.author ? req.body.author : null
    }

    try {
        var updateTask = await TaskService.updateTask(task);
        return res.status(200).json({ status: 200, data: updateTask, message: "Succesfully Updated Task" })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

// Delete Task
exports.deletetask = async function(req, res, next) {

    try {
        var id = req.params.id;
        console.log('Delete Id: ', id);
        var deleteTask = await TaskService.deleteTask(id);
        return res.status(200).json({ status: 200, data: deleteTask, message: 'Successfully deleted Task' })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}