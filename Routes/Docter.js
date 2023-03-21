 const express = require("express")
const { DoctorModel } = require("../models/Doctors.model")

  const DoctorRouter = express.Router()


   DoctorRouter.get("/doctor" , async (req,res) =>{
       try{
         const Doctordata = await DoctorModel.find()
         res.send(Doctordata)
       }
       catch(err){
        console.log(err)
       }
   })

    DoctorRouter.post("/doctor/create",async (req,res) =>{
          const payload = req.body;
         const Doctordata = new DoctorModel(payload)
           await Doctordata.save()
           res.send("userdata Created successfully")
    })


   module.exports={
     DoctorRouter
   }