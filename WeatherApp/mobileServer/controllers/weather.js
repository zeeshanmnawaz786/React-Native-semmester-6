import { weatherSchema } from "../models/weather.js";

const getAllWeatherData = async (req, res) => {
  try {
    const allWeatherData = await weatherSchema.find({});

    res.json({
      allWeatherData: allWeatherData,
    });
  } catch (error) {
    console.error("Error finding blogs:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export { getAllWeatherData };
