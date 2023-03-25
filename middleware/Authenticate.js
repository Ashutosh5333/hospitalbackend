const jwt = require("jsonwebtoken")


  const Authenticate = (req,res,next) => {
  const token =  req.headers?.authorization?.split(" ")[1]; 

            if(token){
                 const decoded = jwt.verify(token,process.env.key)
                    if(decoded){
                         const userId= decoded.userId
                         req.body.userId=userId
                        console.log(decoded)
                        console.log("authenticate", userId)
                        next()
                    }
                    else{
                        res.send({"msg":"you are not Authorized login please "})
                    }
            }
            else{
                res.send({"msg":"you are not auhorized"})
            }

  }

  module.exports={Authenticate}