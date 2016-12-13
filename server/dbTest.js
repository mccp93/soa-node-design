var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todos-db');

var todoSchema = new mongoose.Schema({
    name: String,
    completed: Boolean
});

var Todo = mongoose.model('todo', todoSchema);

Todo.create({
    name: "Take out the trash.",
    completed: false
}).then(function(err, todo){
    console.log(err, todo);
});

