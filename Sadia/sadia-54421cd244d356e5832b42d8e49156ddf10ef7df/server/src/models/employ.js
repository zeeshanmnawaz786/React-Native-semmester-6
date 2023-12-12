import mongoose from "mongoose";

const EmploySchema = new mongoose.Schema({
  employName: {
    type: String,
    required: true,
  },

  designation: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
});

export const employSchema = mongoose.model("EmploySchema", EmploySchema);
