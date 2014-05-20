var mongoose = require('mongoose')
    Schema = mongoose.Schema;


var TaskSchema = new Schema({
    title: String,
    description: String,
    requestedby: String,
    email: String,
    assignedto: String,
    completed: Date,
    subtasks: [{title: String, order: Number, completed: Boolean}],
    order: Number

});

mongoose.model('Task', TaskSchema);