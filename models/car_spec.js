"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class car_spec extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	car_spec.init(
		{
			specId: DataTypes.STRING,
			carId: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "car_spec",
			tableName: "car_spec",
			paranoid: true,
		}
	);
	return car_spec;
};
