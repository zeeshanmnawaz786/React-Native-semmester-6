import express from "express";
import { registerStUser, loginStUser } from "../controllers/auth.js";
import {
  registeremploy,
  getemploy,
  deletemploy,
} from "../controllers/employ.js";

const router = express.Router();

// Authentication Routes
router.post("/registerStUser", registerStUser);
router.post("/loginStUser", loginStUser);

// Blog Routes
router.post("/registeremploy", registeremploy);
router.get("/getemploy", getemploy);
router.delete("/deletemploy", deletemploy);
// router.put("/updateBlog", updateBlog);

export default router;
