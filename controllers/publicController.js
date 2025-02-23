import { Semester, Season, Subject } from "../models/index.js";

// Controller to fetch all semesters
export const getSemesters = async (req, res) => {
  try {
    const semesters = await Semester.findAll();
    res.status(200).json(semesters);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch semesters" });
  }
};

// Controller to fetch all seasons
export const getSeasons = async (req, res) => {
  try {
    const seasons = await Season.findAll();
    res.status(200).json(seasons);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch seasons" });
  }
};

// Controller to fetch all subjects
export const getSubjects = async (req, res) => {
  try {
    const subjects = await Subject.findAll();
    res.status(200).json(subjects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch subjects" });
  }
};
