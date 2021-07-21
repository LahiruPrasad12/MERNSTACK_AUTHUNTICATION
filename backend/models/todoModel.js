const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    userMail : { type: String, required : true },
    subject : { type: String, required : true },
    priority : { type: String, required : true },
    startDate : { type: Date, default: Date.now },
    startDate : { type: Date, require:true},
    description : { type: String, require:true },
    status : { type: String, require:true },
   
});

const todo = mongoose.model("To-Do",todoSchema);

module.exports = todo;