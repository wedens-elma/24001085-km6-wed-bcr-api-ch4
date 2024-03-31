const carRepo = require("../../repository/car");

exports.getAllCars = async () => {
	const data = await carRepo.getAllCars();
	return data;
};

exports.getCarById = async (id) => {
	const data = await carRepo.getCarById(id);
	console.log("usecase");
	console.log(data);

	return data;
};

exports.addCar = async (payload) => {
	const data = await carRepo.addCar(payload);
	return data;
};

exports.updateCar = async (id, payload) => {
	await carRepo.updateCar(id, payload);
	const data = await carRepo.getCarById(id);
	return data;
};

exports.deleteCar = async (id) => {
	const data = await carRepo.deleteCar(id);
	return data;
};
