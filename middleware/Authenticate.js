const jwt = require("jsonwebtoken")


  const Authenticate = (req,res,next) => {
  const token =  req.headers?.authorization?.split(" ")[1]; 

            if(token){
                 const decoded = jwt.verify(token,process.env.key)
                    if(decoded){
                        console.log(decoded)
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