const mongoose = require("mongoose")

const SpecilitySchema = mongoose.Schema({
        pic:String,
        title:String,
        About:String,
})

const  SpecilityModel = mongoose.model(("specility") ,SpecilitySchema )

 module.exports={
    SpecilityModel
 }