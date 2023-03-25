const express =  require("express")
const  bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { UserModel } = require("../models/user.model")
const UserRouter = express.Router()



     UserRouter.post("/signup", async (req,res) =>{
       const {email,password,name} = req.body
          const Userdetail = await UserModel.findOne({email})
              if(Userdetail){
                 res.send("user Already exits try Another email")
            
              }
              else{
                 try{
                    bcrypt.hash(password, 4, async function(err, hash) {
                        const  User = new UserModel({email,password:hash,name})
                        await User.save()
                        res.send({"msg":"user created Accout Sucessfully"})
                    });
                 }
                 catch(err){
                     console.log(err)
                     res.send({"msg":"Something went wrong try Again later"})
                    console.log({"msg":"Something went wrong try Again later"})
                 }
              }
     })

     
     UserRouter.post("/login", async (req,res) => {
           const {email,password,name} = req.body;
          
          const User = await UserModel.find({email})
          //   console.log(User)
          if(User.length>0){
                   const hasedpassword = User[0].password
                  await bcrypt.compare(password, hasedpassword, function(err, result) {
                          if(result){
                            var token = jwt.sign({ foo: 'bar' }, process.env.key);
                              res.send({"msg":"user logged in Sucessfully", "token":token, displayname:User[0].name})
                          }
                          else{
                            res.send({"msg":"please check password"})
                          }
                    });
                }
                else{
                    res.send({"msg":"first created account"})
                }

     })
  
   
  
    module.exports={UserRouter}