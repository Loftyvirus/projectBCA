import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const Semester = sequelize.define(
  "Semester",
  {
    semester_number: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "semesters",
  }
);

export default Semester;
