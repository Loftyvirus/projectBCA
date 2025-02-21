import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const Subject = sequelize.define(
  "Subject",
  {
    course_code: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    subject_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "subjects",
  }
);

export default Subject;
