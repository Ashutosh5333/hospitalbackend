

const mongoose = require("mongoose")

 const UserdetailSchema = mongoose.Schema({
        name:String,
        pic:String,
        PhNumber:String,
        State:String,
        Address:String,
        gender:String,
        Age:String,
        userId:String,
 })


 const UserDetailModel = mongoose.model("userdetail",UserdetailSchema)

 module.exports={UserDetailModel}


