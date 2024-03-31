"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class cars extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			cars.belongsToMany(models.options, { through: "car_option" });
			cars.belongsToMany(models.specs, { through: "car_spec" });
		}
	}
	cars.init(
		{
			plate: DataTypes.STRING,
			manufacture: DataTypes.STRING,
			model: DataTypes.STRING,
			image: DataTypes.STRING,
			rentPerDay: DataTypes.BIGINT,
			capacity: DataTypes.STRING,
			description: DataTypes.STRING,
			availableAt: DataTypes.DATE,
			transmission: DataTypes.STRING,
			available: DataTypes.BOOLEAN,
			type: DataTypes.STRING,
			year: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "cars",
			tableName: "cars",
			paranoid: true,
		}
	);
	return cars;
};
