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

//updated getting subject so tha checksum can include specific subjct at specific semester
export const getSubjects = async (req, res) => {
  try {
    const subjects = await Subject.findAll({
      include: {
        model: Semester,
        attributes: ["id", "semester_number"],
      },
    });
    res.status(200).json(subjects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch subjects" });
  }
};
