import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const QuestionPaper = sequelize.define(
  "QuestionPaper",
  {
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
