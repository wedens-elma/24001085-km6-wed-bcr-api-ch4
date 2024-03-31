const express = require("express");
const router = express.Router();
const carSpecController = require("../controller/car_spec");

router.route("/:id").delete(carSpecController.removeCarSpec);

router.route("/").post(carSpecController.addCarSpec);

module.exports = router;
