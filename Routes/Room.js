const express = require("express")
const { RoomModel } = require("../models/Room.model")


  const RoomRouter = express.Router()


  RoomRouter.get("/room" , async (req,res) =>{
       try{
         const Roomdata = await RoomModel.find()
         res.send(Roomdata)
       }
       catch(err){
        console.log(err)
       }
   })

   RoomRouter.post("/room/create",async (req,res) =>{
          const payload = req.body;
         const Roomdata = new RoomModel(payload)
           await Roomdata.save()
           res.send("userdata Created successfully")
    })


    
  

   module.exports={
    RoomRouter
   }