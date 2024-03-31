const { specs } = require("../../models");

exports.getAllSpecs = async () => {
	return await specs.findAll();
};

exports.getSpecById = async (id) => {
	return await specs.findByPk(id);
};

exports.createSpec = async (payload) => {
	return await specs.create(payload);
};

exports.updateSpec = async (id, payload) => {
	const spec = {
		where: { id },
		returning: true,
	};
	if (!spec) {
		throw new Error(`Spec with id ${id} not found`);
	}
	const data = await specs.update(payload, spec);
	return data[1][0];
};

exports.deleteSpec = async (id) => {
	const spec = {
		where: { id },
	};
	if (!spec) {
		throw new Error(`Spec with id ${id} not found`);
	}
	const data = await specs.destroy(spec);
	return data;
};
