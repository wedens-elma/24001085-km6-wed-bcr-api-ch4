const express = require("express");
const router = express.Router();
const carController = require("../controller/car");

router.route("/").get(carController.getAllCars).post(carController.addCar);

router
  .route("/:id")
  .get(carController.getCar)
  .put(carController.updateCar)
  .delete(carController.deleteCar);

module.exports = router;
