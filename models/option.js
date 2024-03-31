"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class options extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			options.belongsToMany(models.cars, { through: "car_option" });
		}
	}
	options.init(
		{
			option: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "options",
			tableName: "options",
			paranoid: true,
		}
	);
	return options;
};
