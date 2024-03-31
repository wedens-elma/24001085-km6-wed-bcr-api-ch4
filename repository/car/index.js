const { cars, options, specs } = require("../../models");
const { getData, setData, deleteData } = require("../../helper/redis");
const { v4: uuidv4 } = require("uuid");
const crypto = require("crypto");
const path = require("path");
const { uploader } = require("../../helper/cloudinary");

exports.getAllCars = async () => {
	const data = await cars.findAll({
		include: [options, specs],
	});

	return data;
};

exports.getCarById = async (id) => {
	const key = `cars:${id}`;

	let data = await getData(key);

	if (data) {
		console.log("repo ada di redis");
		console.log(data);
		return data;
	}

	data = await cars.findOne({
		where: {
			id,
		},
		include: [options, specs],
	});

	if (data) {
		await setData(key, data, 300);
		console.log("repo gaada di redis");
		console.log(data);

		return data;
	}

	throw new Error(`Car is not found!`);
};

exports.addCar = async (payload) => {
	const randomUUID = uuidv4();
	payload = {
		id: randomUUID,
		...payload,
	};

	// const options = payload.options;

	// if (payload.options) {
	// }

	if (payload.image) {
		const { image } = payload;

		image.publicId = crypto.randomBytes(16).toString("hex");

		image.name = `${image.publicId}${path.parse(image.name).ext}`;

		const imageUpload = await uploader(image);
		payload.image = imageUpload.secure_url;
	}

	const data = await cars.create(payload);
	const key = `cars:${data.id}`;
	await setData(key, data, 300);

	return data;
};

exports.updateCar = async (id, payload) => {
	const car = {
		where: { id },
		returning: true,
	};
	console.log(car);
	if (!car) {
		throw new Error(`Car with id ${id} not found`);
	}

	let data = await cars.update(payload, car);
	return data[0];
};

exports.deleteCar = async (id) => {
	const car = {
		where: { id },
	};
	if (!car) {
		throw new Error(`Car with id ${id} not found`);
	}
	const data = await cars.destroy(car);
	const key = `cars:${data.id}`;
	await deleteData(key);

	return data;
};
