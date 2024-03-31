const specsRepo = require("../../repository/spec");

exports.createSpec = async (specData) => {
	const spec = await specsRepo.createSpec(specData);
	return spec;
};

exports.getSpecById = async (id) => {
	const spec = await specsRepo.getSpecById(id);
	if (!spec) {
		throw new Error(`Spec with id ${id} not found`);
	}
	return spec;
};

exports.updateSpec = async (id, specData) => {
	const updatedSpec = await specsRepo.updateSpec(id, specData);
	if (!updatedSpec) {
		throw new Error(`Unable to update spec with id ${id}`);
	}
	return updatedSpec;
};

exports.deleteSpec = async (id) => {
	const deletedSpec = await specsRepo.deleteSpec(id);
	if (!deletedSpec) {
		throw new Error(`Unable to delete spec with id ${id}`);
	}
	return deletedSpec;
};
