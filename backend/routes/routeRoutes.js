const router = require("express").Router();
const route = require("../models/routeModel");
const auth = require("../middleware/auth")

//Add New Agent
router.route("/add").post(auth,async(req,res)=>{
    
    
    try{
    const name = req.body.name;
    const newAgency = new route({
        name
    })

    const saveRoute = await newAgency.save()
    res.json(saveRoute);
  

    }catch(err){
        console.log(err);
        res.status(500).send();
    }
})




router.get("/view",auth, async(req,res)=>{
    try{
        const allRoutes = await route.find();
        res.json(allRoutes);
    }catch(err){
        console.log(err);
        res.status(500).send();
    }
})



module.exports = router;