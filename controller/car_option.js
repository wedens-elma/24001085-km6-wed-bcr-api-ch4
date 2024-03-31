const carOptionUsecase = require("../usecase/car_option");

exports.addCarOption = async (req, res, next) => {
	try {
		const { carId, optionId } = req.body;
		const carOption = await carOptionUsecase.addCarOption(carId, optionId);
		res.status(201).json({
			carOption,
			message: "Car Option added successfully",
		});
	} catch (error) {
		next(error);
	}
};

exports.removeCarOption = async (req, res, next) => {
	try {
		// const { carId, optionId } = req.body;
		const id = +req?.params?.id;
		const removedCarOption = await carOptionUsecase.removeCarOption(id);
		res.status(200).json({
			removedCarOption,
			message: "Car Option removed successfully",
		});
	} catch (error) {
		next(error);
	}
};
