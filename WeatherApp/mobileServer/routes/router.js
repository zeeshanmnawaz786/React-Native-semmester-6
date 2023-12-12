import express from "express";
import { getAllWeatherData } from "../controllers/weather.js";

const router = express.Router();
router.get("/getAllWeatherData", getAllWeatherData);

export default router;
