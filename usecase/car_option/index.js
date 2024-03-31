const carOptionRepo = require("../../repository/car_option");

exports.addCarOption = async (carId, optionId) => {
	const carOption = await carOptionRepo.addCarOption(carId, optionId);
	return carOption;
};

exports.removeCarOption = async (id) => {
	const data = await carOptionRepo.removeCarOption(id);
	return data;
};
