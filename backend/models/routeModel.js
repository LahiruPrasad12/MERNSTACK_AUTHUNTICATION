const mongoose = require("mongoose");

const routeSchema = new mongoose.Schema({
    name : { type: String, required : true },
   
});

const route = mongoose.model("Routes",routeSchema);

module.exports = route;