import Semester from "./semester.js";
import Season from "./season.js";
import Subject from "./subject.js";
import QuestionPaper from "./questionPaper.js";

Semester.hasMany(QuestionPaper);
QuestionPaper.belongsTo(Semester);

Season.hasMany(QuestionPaper);
QuestionPaper.belongsTo(Season);

Subject.hasMany(QuestionPaper);
QuestionPaper.belongsTo(Subject);

export { Semester, Season, Subject, QuestionPaper };
