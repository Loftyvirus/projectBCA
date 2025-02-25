// create routes for adding into the database tables
import express from "express";
import {
  addQuestionPaper,
  getAllQuestionPapers,
  getQuestionPaperById,
} from "../controllers/adminController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/addqp", verifyToken, addQuestionPaper);
router.get("/getqps", getAllQuestionPapers);
router.get("/getqp/:id", getQuestionPaperById);

export default router;
