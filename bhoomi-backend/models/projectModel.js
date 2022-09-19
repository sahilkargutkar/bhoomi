const mongoose = require("mongoose");
const validator = require("validator");

const projectSchema = new mongoose.Schema({
  projectId: {
    type: String,
    required: true,
    default: () => Math.floor(Math.random() * 10000000),
    unique: true,
  },
  projectName: {
    type: String,
    required: [true, "Project Name is required"],
  },
  projectManager: {
    type: String,
    required: [true, "Project Manager is required"],
  },
  startDate: {
    type: Date,
    required: [true, "Date is required"],
    // default: Date.now(),
  },
  siteAddress: {
    type: String,
    required: [true, "Site Address is required"],
  },
  railwayStation: {
    type: String,
    required: [true, "Railway Station is required"],
  },
  budget: {
    type: Number,
    required: [true, "Budget is required"],
  },
  endDate: {
    type: Date,
    required: [true, "End Date is required"],
  },
  SupplierName: {
    type: String,
    required: [true, "Supplier Name is required"],
  },
  contactPerson: {
    type: String,
    required: [true, "Contact Person is required"],
  },
  phone: {
    type: Number,
    minLength: [10, "Phone Number should not be less than 10 characters"],
    maxLength: [12, "Phone Number should not be greater than 12 characters"],
  },
  email: {
    type: String,
    validate: [validator.isEmail, "Please Enter a valid Email"],
  },
  projectStatus: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Project", projectSchema);
