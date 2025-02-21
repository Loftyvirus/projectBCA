import express from "express";
import {
  // registerSupreme,
  authenticateSupreme,
} from "../controllers/authController.js";

const router = express.Router();

// #one time user commented registering route
// router.post("/register", registerSupreme); 
router.post("/login", authenticateSupreme);

export default router;
