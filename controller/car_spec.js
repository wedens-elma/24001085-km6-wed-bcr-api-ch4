const carSpecUsecase = require("../usecase/car_spec");

exports.addCarSpec = async (req, res, next) => {
	try {
		const { carId, specId } = req.body;
		const carSpec = await carSpecUsecase.addCarSpec(carId, specId);
		res.status(201).json({
			carSpec,
			message: "Car Spec added successfully",
		});
	} catch (error) {
		next(error);
	}
};

exports.removeCarSpec = async (req, res, next) => {
	try {
		const id = +req?.params?.id;
		const removedCarSpec = await carSpecUsecase.removeCarSpec(id);
		res.status(200).json({
			removedCarSpec,
			message: "Car Spec removed successfully",
		});
	} catch (error) {
		next(error);
	}
};
