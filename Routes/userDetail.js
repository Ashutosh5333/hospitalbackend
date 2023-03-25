const express = require("express")
const { UserDetailModel } = require("../models/userDetails.model.")


  const UserDetailRouter = express.Router()


  UserDetailRouter.get("/userdetail" , async (req,res) =>{
       try{
         const UserDetailData = await UserDetailModel.find({userId:req.body.userId})
         res.send(UserDetailData)
       }
       catch(err){
        console.log(err)
       }
   })

   // ----------- post ----------- //

   UserDetailRouter.post("/userdetail/create",async (req,res) =>{
          const payload = req.body;
         const UserDetailData = new UserDetailModel(payload)
           await UserDetailData.save()
           res.send("userdata Created successfully")
    })

    // ------------  Patch  ------------ //

    UserDetailRouter.patch("/userdetail/:Id" ,async(req,res) =>{
            const Id = req.params.Id
            const payload= req.body;
            const userId = req.body.userId
            try{
               const UserDetailData = await UserDetailModel.findOne({_id:Id})
                   if(userId !== UserDetailData.userId){
                    res.send("you are not authnticated")
                   }
                   await UserDetailModel.findByIdAndUpdate({_id:Id},payload)
                res.send("user data updated sucessfully")
            }
            catch(err){
              res.send("somethind went wrong")
            } 
    })

//   -------- Delete --------  //  

UserDetailRouter.delete("/userdetail/:Id" ,async(req,res) =>{
      const Id = req.params.Id
      const userId = req.body.userId
      try{
        const UserDetailData = await UserDetailModel.findOne({_id:Id})
                   if(userId !== UserDetailData.userId){
                    res.send("you are not authnticated")
                   }
             await UserDetailModel.findByIdAndDelete({_id:Id})
          res.send("doctor data deleted sucessfully")
      }
      catch(err){
        res.send("somethind went wrong")
      } 
})

    // ---------- Cart ----------- //
  







   module.exports={
    UserDetailRouter
   }