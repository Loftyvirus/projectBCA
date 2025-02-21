import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const Supreme = sequelize.define(
  "Supreme",
  {
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "supreme",
  }
);

export default Supreme;
