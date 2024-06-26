const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  userPassword: {
    type: String,
    required: true,
  },
  userRole: {
    type: String,
    required: true,
    default: "user",
  },
  userPhoneNo: {
    type: String,
    required: true,
  },
  userCity: {
    type: String,
    required: true,
  },
  userState: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
  },
  isActive: {
    type: Boolean,
    required: true,
    default: true,
  },
});
userSchema.set("timestamps", true);
module.exports = mongoose.model("user", userSchema);
