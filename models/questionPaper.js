import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const QuestionPaper = sequelize.define(
  "QuestionPaper",
  {
    semester_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    season_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    subject_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    question_text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false, tableName: "question_papers" }
);

export default QuestionPaper;
