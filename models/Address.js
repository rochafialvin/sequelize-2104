const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");

class Address extends Model {}

Address.init(
  {
    addressId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "User",
        key: "userId",
      },
    },
    name: {
      type: DataTypes.STRING(200),
    },
  },
  {
    sequelize,
    modelName: "Address",
    tableName: "addresses",
  }
);

Address.belongsTo(User, { foreignKey: "userId", as: "addresses" });

module.exports = Address;
