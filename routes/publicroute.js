import express from "express";
import {
  getSemesters,
  getSeasons,
  getSubjects,
} from "../controllers/publicController.js";

const router = express.Router();

// Route to get all semesters
router.get("/semesters", getSemesters);

// Route to get all seasons
router.get("/seasons", getSeasons);

// Route to get all subjects
router.get("/subjects", getSubjects);

export default router;
