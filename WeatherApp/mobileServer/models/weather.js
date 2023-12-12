import mongoose from "mongoose";

const WeatherSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

export const weatherSchema = mongoose.model("WeatherSchema", WeatherSchema);
