const router = require("express").Router();
const Todo = require("../models/todoModel");
const auth = require("../middleware/auth")

router.post("/add",auth,async(req,res)=>{
    try{

        const {userMail,subject,priority,endDate,description,} = req.body;

        var status = "incomplete"
        
        const newTodo = new Todo({
            userMail,
            subject,
            priority,
            endDate,
            description,
            status
        });

        await newTodo.save().then(()=>{
            res.status(200).send({status:"TO-DO Add Success"});
        }).catch((err)=>{
            res.status(500).send({msg : err});
        })

    }catch(err){
        console.error(err);
        res.json(false);
    }
})


module.exports = router;
