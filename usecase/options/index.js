const optionsRepo = require("../../repository/option");

exports.createOption = async (optionData) => {
	const option = await optionsRepo.createOption(optionData);
	return option;
};

exports.getOptionById = async (id) => {
	const option = await optionsRepo.getOptionById(id);
	if (!option) {
		throw new Error(`Option with id ${id} not found`);
	}
	return option;
};

exports.updateOption = async (id, optionData) => {
	const updatedOption = await optionsRepo.updateOption(id, optionData);
	if (!updatedOption) {
		throw new Error(`Unable to update option with id ${id}`);
	}
	return updatedOption;
};

exports.deleteOption = async (id) => {
	const deletedOption = await optionsRepo.deleteOption(id);
	if (!deletedOption) {
		throw new Error(`Unable to delete option with id ${id}`);
	}
	return deletedOption;
};
