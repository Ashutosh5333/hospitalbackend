
const express = require("express")
const { connection } = require("./Config/db")
const { UserRouter } = require("./Routes/user")

const app = express()

  app.use(express.json())

 

   app.get("/" ,(req,res) =>{
     res.send("welcome Home")
   })


    app.use(UserRouter)


   app.listen(8000 , async (req,res) => {
       try{
         await connection
         console.log("connected to database")
       }
       catch(err){
        console.log("something went wrong")
        console.log(err)
       }
      console.log("listen on port 8000")
   })