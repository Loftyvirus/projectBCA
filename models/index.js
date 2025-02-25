import Semester from "./semester.js";
import Season from "./season.js";
import Subject from "./subject.js";
import QuestionPaper from "./questionPaper.js";

// Defining associations explicitly with foreign keys
Semester.hasMany(QuestionPaper, { foreignKey: "semester_id" });
QuestionPaper.belongsTo(Semester, { foreignKey: "semester_id" });

Season.hasMany(QuestionPaper, { foreignKey: "season_id" });
QuestionPaper.belongsTo(Season, { foreignKey: "season_id" });

Subject.hasMany(QuestionPaper, { foreignKey: "subject_id" });
QuestionPaper.belongsTo(Subject, { foreignKey: "subject_id" });

export { Semester, Season, Subject, QuestionPaper };
