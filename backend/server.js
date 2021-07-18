const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
require("dotenv").config();

/*---------------------------------------Set Up Server-------------------------------------------*/
const app = express();
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log(`Server start on port : ${PORT}`)
})



/*---------------------------------------connect to mongoDB-------------------------------------------*/
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




/*---------------------------------------Set Route Ex-------------------------------------------*/
   //EX -> Type 01
app.use("/auth", require("./routes/userRoutes"));
   //Ex -> Type 02
const user = require("./routes/userRoutes");
app.use("/users",user);


/*---------------------------------------Set Route-------------------------------------------*/
app.use("/ro", require("./routes/routeRoutes"));
app.use("/user", require("./routes/userRoutes"));
