let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();
  
// Student Model
let routineSchema = require("../models/Food");
  
// CREATE Student
router.post("/create-fridge", (req, res, next) => {
    routineSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});
  
// READ Students
router.get("/", (req, res) => {
    routineSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
  
// UPDATE student
router
  .route("/update-fridge/:id")
  // Get Single Student
  .get((req, res) => {
    routineSchema.findById(
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
    routineSchema.findByIdAndUpdate(
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
router.delete("/delete-fridge/:id", 
(req, res, next) => {
    routineSchema.findByIdAndRemove(
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