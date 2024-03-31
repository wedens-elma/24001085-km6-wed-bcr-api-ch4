const carSpecRepo = require("../../repository/car_spec");

exports.addCarSpec = async (carId, specId) => {
	const carSpec = await carSpecRepo.addCarSpec(carId, specId);
	return carSpec;
};

exports.removeCarSpec = async (id) => {
	const removedCarSpec = await carSpecRepo.removeCarSpec(id);
	return removedCarSpec;
};
