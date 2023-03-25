const mongoose = require("mongoose")

const CartSchema = mongoose.Schema({
        pic:String,
        price:String,
        category:String,
        userId:String
})

const  CartModel = mongoose.model(("cart") ,CartSchema )

 module.exports={
    CartModel
 }