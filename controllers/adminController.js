// define the methods to add data to the tables in databases
import { Semester, Season, Subject, QuestionPaper } from "../models/index.js";


export const addQuestionPaper = async (req, res) => {
  const { semester_id, season_id, subject_id, question_text, year } = req.body;

  try {
    // Create question paper entry
    const questionPaper = await QuestionPaper.create({
      semester_id,
      season_id,
      subject_id,
      question_text,
      year,
    });

    const season = await Season.findByPk(season_id);
    const subject = await Subject.findByPk(subject_id);

    if (!season || !subject) {
      return res.status(404).json({ error: "Season or Subject not found" });
    }

    res.status(201).json({
      message: "Question paper added successfully",
      questionPaper,
      season_name: season.season_name,
      subject_name: subject.subject_name,
      subject_code: subject.course_code,
    });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Error adding question paper", details: err.message });
  }
};


//to get those data all
export const getAllQuestionPapers = async (req, res) => {
  try {
    const questionPapers = await QuestionPaper.findAll();
    res.status(200).json(questionPapers);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Error fetching question papers", details: err.message });
  }
};




//gettin specific by id, requires all data to be seen so upper logic is main here
export const getQuestionPaperById = async (req, res) => {
  const { id } = req.params;

  try {
    const questionPaper = await QuestionPaper.findByPk(id);
    if (questionPaper) {
      res.status(200).json(questionPaper);
    } else {
      res.status(404).json({ error: "Question paper not found" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ error: "Error fetching question paper", details: err.message });
  }
};





