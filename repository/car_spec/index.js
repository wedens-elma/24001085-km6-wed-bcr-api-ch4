const { car_spec } = require("../../models");

exports.addCarSpec = async (carId, specId) => {
	const carSpec = await car_spec.create({ carId, specId });
	return carSpec;
};

exports.removeCarSpec = async (id) => {
	const removedCarSpec = {
		where: { id },
	};
	const data = await car_spec.destroy(removedCarSpec);
	return data;
};
