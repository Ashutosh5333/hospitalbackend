
const express = require("express")

const app = express()

  app.use(express.json())

 

   app.get("/" ,(req,res) =>{
     res.send("welcome Home")
   })



   app.listen(8000 , (req,res) => {
      console.log("listen on port 8000")
   })