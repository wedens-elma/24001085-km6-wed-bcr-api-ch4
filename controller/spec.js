const specsUsecase = require("../usecase/specs");

exports.createSpec = async (req, res, next) => {
	try {
		const data = req.body;
		const spec = await specsUsecase.createSpec(data);
		res.status(201).json({
			data: spec,
			message: "Spec created successfully",
		});
	} catch (error) {
		next(error);
	}
};

exports.getSpecById = async (req, res, next) => {
	try {
		const { id } = req.params;
		const spec = await specsUsecase.getSpecById(id);
		res.status(200).json({
			data: spec,
			message: "Spec retrieved successfully",
		});
	} catch (error) {
		next(error);
	}
};

exports.updateSpec = async (req, res, next) => {
	try {
		const { id } = req.params;
		const updatedSpec = await specsUsecase.updateSpec(id, req.body);
		res.status(200).json({
			data: updatedSpec,
			message: "Spec updated successfully",
		});
	} catch (error) {
		next(error);
	}
};

exports.deleteSpec = async (req, res, next) => {
	try {
		const { id } = req.params;
		await specsUsecase.deleteSpec(id);
		res.status(200).json({
			message: "Spec deleted successfully",
		});
	} catch (error) {
		next(error);
	}
};
