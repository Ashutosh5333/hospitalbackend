 const express = require("express");
 const { AppointmentModel } = require("../models/BookAppoinment.model");

 const BookAppoinmentRouter = express.Router();

        BookAppoinmentRouter.get("/bookApoint", async (req, res) => {
           try {
             const BookAppoinment = await AppointmentModel.find({ userId: req.body.userId });
             res.send(BookAppoinment);
           } catch (err) {
             console.log(err);
           }
         });
         
         // ----------- post ----------- //

         BookAppoinmentRouter.post("/bookApoint/create", async (req, res) => {
           const payload = req.body;
           const BookAppoinment = new AppointmentModel(payload);
           await BookAppoinment.save();
           res.send("Appointment is booked");
         });

         // --------------- patch --------------- //
         BookAppoinmentRouter.patch("/bookApoint/update/:Id", async (req, res) => {
            const Id = req.params.Id;
            const payload = req.body;
            const userId = req.body.userId;
            try {
              const BookAppoinment = await AppointmentModel.findOne({ _id: Id});
              if (userId !== BookAppoinment.userId) {
                res.send("you are not authnticated");
              }
              await AppointmentModel.findByIdAndUpdate({ _id: Id },payload);
              res.send("Appointment is updated");
            } catch (err) {
              res.send("something went wrong");
            }
          });



//   -------- Delete --------  //
       
BookAppoinmentRouter.delete("/bookApoint/delete/:Id", async (req, res) => {
    const Id = req.params.Id;
    const userId = req.body.userId;
    try {
      const BookAppoinment = await AppointmentModel.findOne({ _id: Id });
      if (userId !== BookAppoinment.userId) {
        res.send("you are not authnticated");
      }
      await AppointmentModel.findByIdAndDelete({ _id: Id });
      res.send("Appointment is cancel");
    } catch (err) {
      res.send("something went wrong");
    }
  });

module.exports = {
    BookAppoinmentRouter,
};
