const express = require("express")
const { RoomModel } = require("../models/Room.model")
const { SpecilityModel } = require("../models/Speciltiy.model")


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
    //  ------------ Post ---------- //

   RoomRouter.post("/room/create",async (req,res) =>{
          const payload = req.body;
         const Roomdata = new RoomModel(payload)
           await Roomdata.save()
           res.send("userdata Created successfully")
    })

     // ------------- Patch room -------------- //

    RoomRouter.patch("/room/:Id" ,async(req,res) =>{
      const Id = req.params.Id
      const payload= req.body;
      try{
             await RoomModel.findByIdAndUpdate({_id:Id},payload)
          res.send("user data updated sucessfully")
       }
      catch(err){
        res.send("somethind went wrong")
      } 
})


     RoomRouter.post("/specilty" , async (req,res) =>{
        try{
          const Data = await SpecilityModel.find()
          res.send(Data)
        }
        catch(err){
          console.log(err)
        }
     })

     RoomRouter.post("/specilty/create",async (req,res) =>{
      const payload = req.body;
      const Data = new SpecilityModel(payload)
       await Data.save()
       res.send("userdata Created successfully")
})

    
  

   module.exports={
    RoomRouter
   }