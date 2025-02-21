import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const QuestionPaper = sequelize.define(
  "QuestionPaper",
  {
    question_text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  { timestamps: false, tableName: "question_papers" }
);

export default QuestionPaper;
