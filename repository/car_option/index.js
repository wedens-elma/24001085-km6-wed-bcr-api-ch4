const { car_option } = require("../../models");

exports.addCarOption = async (carId, optionId) => {
	const carOption = await car_option.create({ carId, optionId });
	return carOption;
};

exports.removeCarOption = async (id) => {
	const removedCarOption = {
		where: { id },
	};
	const data = await car_option.destroy(removedCarOption);
	return data;
};
