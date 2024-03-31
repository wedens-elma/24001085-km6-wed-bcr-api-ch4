"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class car_option extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	car_option.init(
		{
			optionId: DataTypes.STRING,
			carId: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "car_option",
			tableName: "car_option",
			paranoid: true,
		}
	);
	return car_option;
};
