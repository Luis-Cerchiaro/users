const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");
// in uppercase and singular // in lowercase and singular
const User = sequelize.define(
  "user",
  {
    // Declaration of data columns
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthday: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },
  // Options
  {
    timestamps: false,
    indexes: [
      {
        unique: true,
        fields: ["email"],
      }
    ]
  }
);

// In uppercase and singular
module.exports = User;
