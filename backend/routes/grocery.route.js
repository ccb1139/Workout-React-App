let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
  
// Grocery Model
let grocerySchema = require("../models/Grocery");
  
// CREATE Student
router.post("/create-grocery-category", (req, res, next) => {
    grocerySchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});
  
// READ grocery
router.get("/", (req, res) => {
    grocerySchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
  
// UPDATE grocery
router
  .route("/update-grocery-category/:id")
  // Get Single Student
  .get((req, res) => {
    grocerySchema.findById(
        req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    });
  })
  
  // Update Student Data
  .put((req, res, next) => {
    grocerySchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      (error, data) => {
        if (error) {
          return next(error);
          console.log(error);
        } else {
          res.json(data);
          console.log("Fridge updated successfully !");
        }
      }
    );
  });
  
// Delete Student
router.delete("/delete-grocery-category/:id", 
(req, res, next) => {
    grocerySchema.findByIdAndRemove(
      req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});
  
module.exports = router;