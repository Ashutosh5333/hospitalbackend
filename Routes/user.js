
const express =  require("express")
const { UserModel } = require("../models/user.model")

const UserRouter = express.Router()


UserRouter.get("/dash", (req,res) =>{
    res.send("hello dashboard")
})


     UserRouter.post("/signup", async (req,res) =>{
       const {email,password} = req.body
          const Userdetail = await UserModel.findOne({email})
              if(Userdetail){
                 res.send("user Already exits try Another email")
              }
              else{
                 try{
                    const  User = new UserModel({email,password})
                    await User.save()
                    res.send({"msg":"user created Accout Sucessfully"})
                 }
                 catch(err){
                    console.log({"msg":"Something went wrong try Again later"})
                 }
              }
       
     })

     
     UserRouter.post("/login", async (req,res) => {
           const {email} = req.body;
          
          const User = await UserModel.find({email})
           console.log(User)
                if(User.length>0){
                    res.send({"msg":"user logged in Sucessfully"})
                }
                else{
                    res.send({"msg":"wrong crendential"})
                }

     })
  
  
    module.exports={UserRouter}