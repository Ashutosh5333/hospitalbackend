const express = require("express");
const { CartModel } = require("../models/Cart.model");

const UserCartRouter = express.Router();

         UserCartRouter.get("/cart", async (req, res) => {
           try {
             const UsercartData = await CartModel.find({ userId: req.body.userId });
             res.send(UsercartData);
           } catch (err) {
             console.log(err);
           }
         });
         
         // ----------- post ----------- //

         UserCartRouter.post("/cart/create", async (req, res) => {
           const payload = req.body;
           const UsercartData = new CartModel(payload);
           await UsercartData.save();
           res.send("Cart data Added successfully");
         });





//   -------- Delete --------  //

UserCartRouter.delete("/cart/:Id", async (req, res) => {
  const Id = req.params.Id;
  const userId = req.body.userId;
  try {
    const UsercartData = await CartModel.findOne({ _id: Id });
    if (userId !== UsercartData.userId) {
      res.send("you are not authnticated");
    }
    await CartModel.findByIdAndDelete({ _id: Id });
    res.send("Cart data deleted sucessfully");
  } catch (err) {
    res.send("somethind went wrong");
  }
});

module.exports = {
  UserCartRouter,
};
