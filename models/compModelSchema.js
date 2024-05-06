const { string } = require("joi");
const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  compName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  foundedOn: {
    type: Date,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "users",
  },
  isActive: {
    type: Boolean,
    required: true,
    default: true,
  },
  company_logo: {
    type: String,
  },
});
companySchema.set("timestamps", true);
module.exports = mongoose.model("company", companySchema);
