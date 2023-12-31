import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  rollNo: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const userSchema = mongoose.model("UserSchema", UserSchema);
