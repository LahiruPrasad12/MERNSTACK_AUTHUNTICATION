const router = require("express").Router();
const route = require("../models/routeModel");

//Add New Agent
router.route("/add").post((req,res)=>{
    const name = req.body.name;

    const newAgency = new route({
        name
    })

    newAgency.save().then(()=>{
        res.status(200).send({status:"Routes Add Success"})
    }).catch((err)=>{
        res.status(500).send({status:err})
    })
})



module.exports = router;