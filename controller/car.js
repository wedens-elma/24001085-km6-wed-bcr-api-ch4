const carUsecase = require("../usecase/car");

exports.getAllCars = (req, res, next) => {
	const data = carUsecase.getAllCars();
	const response = {
		data,
		message: "All cars retrieved successfully",
	};

	res.status(200).json(response);
};

exports.getCar = async (req, res, next) => {
	try {
		const { id } = req.params;
		const data = await carUsecase.getCarById(id);

		if (!data) {
			return next({
				statusCode: 404,
				message: `Car with id ${id} is not found`,
			});
		}

		console.log("controller");
		console.log(data);

		const carId = data.carId;
		const optionsData = req.body.options;

		if (optionsData) {
			const result = await carUsecase.addOptionsToCar(carId, optionsData);
		}

		const response = {
			data: data,
			message: `Car with id ${id} retrieved successfully!`,
		};

		res.status(200).json(response);
	} catch (error) {
		next(error);
	}
};

exports.addCar = async (req, res, next) => {
	try {
		let body = req.body;
		const { image } = req.files;
		console.log(body);
		console.log(req.body);
		if (!body) {
			return next({
				message: "Body is not valid!",
				statusCode: 400,
			});
		}
		body = {
			...body,
			image,
		};
		const data = await carUsecase.addCar(body);
		res.status(201).json({
			data,
			message: "Car added successfully",
		});
	} catch (error) {
		next(error);
	}
};

exports.updateCar = async (req, res, next) => {
	try {
		const id = req?.params?.id;

		const carToUpdate = carUsecase.getCarById(id);

		if (!carToUpdate) {
			return next({
				statusCode: 404,
				message: `Car with id ${id} is not found`,
			});
		}

		const updatedCar = {
			id: id,
			...req.body,
		};
		const data = await carUsecase.updateCar(id, updatedCar);
		console.log("controller update");
		console.log(data);

		res.status(200).json({
			data: data,
			message: "Car updated successfully",
		});
	} catch (error) {
		next(error);
	}
};

exports.deleteCar = async (req, res, next) => {
	try {
		const id = req?.params?.id;

		const carToDelete = await carUsecase.getCarById(id);

		if (!carToDelete) {
			return next({
				statusCode: 404,
				message: `Car with id ${id} is not found`,
			});
		}

		const data = await carUsecase.deleteCar(id);

		res.status(200).json({
			data: data,
			message: "Car deleted successfully",
		});
	} catch (error) {
		next(error);
	}
};
