const express = require("express");
const router = express.Router();
const carRoute = require("./car");
const optionRoute = require("./option");
const specRoute = require("./spec");
const carOptionRoute = require("./car_option");
const carSpecRoute = require("./car_spec");

router.use("/cars", carRoute);
router.use("/option", optionRoute);
router.use("/spec", specRoute);
router.use("/car_option", carOptionRoute);
router.use("/car_spec", carSpecRoute);

router.use("", (req, res) => {
	res.status(200).json({
		message: "ping successfully",
	});
});

module.exports = router;
