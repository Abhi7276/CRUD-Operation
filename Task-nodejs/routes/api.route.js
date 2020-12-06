var express = require('express');
var router = express.Router();

var tasks = require('./API/task.route');

router.use('/tasks', tasks);

module.exports = router;