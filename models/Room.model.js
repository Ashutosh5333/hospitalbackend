const mongoose = require("mongoose")

const RoomSchema = mongoose.Schema({
        pic:String,
        price:String,
        category:String,
})

const  RoomModel = mongoose.model(("room") ,RoomSchema )

 module.exports={
    RoomModel
 }