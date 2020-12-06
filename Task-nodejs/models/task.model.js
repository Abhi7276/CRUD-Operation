var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    assignTo: String,
    creationDate: Date,
    author: String
});

taskSchema.plugin(mongoosePaginate);
var Task = mongoose.model('Task', taskSchema);

module.exports = Task;