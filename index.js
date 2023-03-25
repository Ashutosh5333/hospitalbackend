
const express = require("express")
const cors = require("cors")
const { connection } = require("./Config/db")
const { Authenticate } = require("./middleware/Authenticate")
const { DoctorRouter } = require("./Routes/Docter")
const { UserRouter } = require("./Routes/user")
const { RoomRouter } = require("./Routes/Room")
const { UserDetailRouter } = require("./Routes/userDetail")
const { UserCartRouter } = require("./Routes/Cart")
const { BookAppoinmentRouter } = require("./Routes/Appointment")


const app = express()
app.use(express.json())

 app.use(cors({
    origin:"*"
 }))

 
   app.get("/" ,(req,res) =>{
     res.send("welcome Home")
   })

    app.use(UserRouter)
    app.use(DoctorRouter)
    app.use(RoomRouter)

    app.use(Authenticate)
    app.use(UserDetailRouter)
    app.use(UserCartRouter)
    app.use(BookAppoinmentRouter)
    

   app.get("/dash" ,(req,res) =>{
    res.send("welcome Home")
  })




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