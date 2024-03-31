const express = require("express");
const router = express.Router();
const carOptionController = require("../controller/car_option");

router.route("/:id").delete(carOptionController.removeCarOption);
router.route("/").post(carOptionController.addCarOption);

module.exports = router;
