const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
const Address = require("./Address");

class User extends Model {}

User.init(
  {
    userId: {
      type: DataTypes.INTEGER, // int
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(100), // varchar(100)
      allowNull: false, // not null
      unique: true,
    },
    email: {
      type: DataTypes.STRING(100), // varchar(100)
      allowNull: false, // not null
      unique: true,
    },
    age: DataTypes.INTEGER,
    gender: DataTypes.ENUM("Male", "Female"),
    isVerified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    password: {
      type: DataTypes.STRING(100), // varchar(100)
      allowNull: false, // not null
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
  }
);

User.hasMany(Address, { foreignKey: "userId", as: "addresses" });

module.exports = User;
