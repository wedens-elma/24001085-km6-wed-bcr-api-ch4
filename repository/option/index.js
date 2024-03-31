const { options } = require("../../models");

exports.getAllOptions = async () => {
	return await options.findAll();
};

exports.getOptionById = async (id) => {
	return await options.findByPk(id);
};

// exports.getOptionByName = async (name) => {
// 	return await options.find({ options: name });
// };

exports.createOption = async (payload) => {
	console.log("ini repo");
	console.log(payload);
	const data = await options.create(payload);
	console.log(data);
	return data;
};

exports.updateOption = async (id, payload) => {
	const option = {
		where: { id },
		returning: true,
	};
	console.log(option);
	if (!option) {
		throw new Error(`Option with id ${id} not found`);
	}

	const data = await options.update(payload, option);
	return data[1][0];
};

exports.deleteOption = async (id) => {
	const option = {
		where: { id },
	};
	if (!option) {
		throw new Error(`Option with id ${id} not found`);
	}
	const data = await options.destroy(option);
	return data;
};
