var Task = require('../models/task.model');

// Get/ Receving Tasks
exports.getTasks = async function(query, page, limit) {
    var option = {
        page,
        limit
    }
    try {
        var tasks = await Task.paginate(query, option);
        return tasks
    } catch (e) {
        throw Error('Error while Paginating tasks')
    }
}

// Create new Task
exports.createTask = async function(task) {
    var newTask = new Task({
        title: task.title,
        description: task.description,
        assignTo: task.assignTo,
        creationDate: new Date(),
        author: task.author
    })

    try {
        var saveTask = await newTask.save();
        return saveTask;
    } catch (e) {
        throw Error("Error while Creating Todo")
    }
}

// Update Task
exports.updateTask = async function(task) {
    var id = task.id;
    console.log('Id', id);
    try {
        var previousTask = await Task.findById(id);
    } catch (e) {
        throw Error("Error occured while Finding the task")
    }
    if (!previousTask) {
        return false;
    }
    // Edit the Task
    previousTask.title = task.title;
    previousTask.description = task.description;
    previousTask.assignTo = task.assignTo;
    previousTask.creationDate = task.creationDate;
    previousTask.author = task.author;

    console.log('Update Previous Task', previousTask);

    try {
        var saveTask = await previousTask.save();
        return saveTask;
    } catch (e) {
        throw Error("And Error occured while updating the task");
    }
}

// Delete Task
exports.deleteTask = async function(id) {
    console.log(('Delete Id', id));
    try {
        var deleted = await Task.deleteOne({ _id: id });
        return deleted;
    } catch (e) {
        throw Error("Error Occured while Deleting the Task")
    }
}