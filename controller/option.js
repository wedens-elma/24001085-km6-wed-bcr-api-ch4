const optionsUsecase = require("../usecase/options");

exports.createOption = async (req, res, next) => {
	try {
		const option = req.body;
		console.log(option);
		const data = await optionsUsecase.createOption(option);
		console.log(data);
		res.status(201).json({
			data: option,
			message: "Option created successfully",
		});
	} catch (error) {
		next(error);
	}
};

exports.getOptionById = async (req, res, next) => {
	try {
		const { id } = req.params;
		const option = await optionsUsecase.getOptionById(id);
		res.status(200).json({
			data: option,
			message: "Option retrieved successfully",
		});
	} catch (error) {
		next(error);
	}
};

exports.updateOption = async (req, res, next) => {
	try {
		const { id } = req.params;
		const updatedOption = await optionsUsecase.updateOption(id, req.body);
		res.status(200).json({
			data: updatedOption,
			message: "Option updated successfully",
		});
	} catch (error) {
		next(error);
	}
};

exports.deleteOption = async (req, res, next) => {
	try {
		const { id } = req.params;
		await optionsUsecase.deleteOption(id);
		res.status(200).json({
			message: "Option deleted successfully",
		});
	} catch (error) {
		next(error);
	}
};
