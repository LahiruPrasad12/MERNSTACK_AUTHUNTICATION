const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
require("dotenv").config();

//set up server
const app = express();
const PORT = process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log(`Server start on port : ${PORT}`)
})



//connect to mongoDB

//Type 01
const URL= process.env.MONGO_CONNECT;

mongoose.connect(URL,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
})
const connection =mongoose.connection;
connection.once("open", ()=>{
    console.log("connection success")
})


//Type 02
// mongoose.connect(process.env.MONGO_CONNECT,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// },(err)=>{
//     console.log("Connection Success");
// });
