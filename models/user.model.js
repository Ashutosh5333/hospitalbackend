const express = require("express")

const mongoose = require("mongoose")

 const UserSchema = mongoose.Schema({
        name:String,
        email:String,
        password:String,
        PhNumber:String,
        Address:String

 })


 const UserModel = mongoose.model("user",UserSchema)

 module.exports={UserModel}


