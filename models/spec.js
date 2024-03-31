"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class specs extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			specs.belongsToMany(models.cars, { through: "car_spec" });
		}
	}
	specs.init(
		{
			spec: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "specs",
			tableName: "specs",
			paranoid: true,
		}
	);
	return specs;
};
