const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Project = require("../models/projectModel");

exports.createProject = catchAsyncErrors(async (req, res) => {
  const project = await Project.create(req.body);

  res.status(201).json({
    success: true,
    message: "Project Created Successfully",
    project,
  });
});

exports.getAllProjects = catchAsyncErrors(async (req, res, next) => {
  const allProjects = await Project.find();

  res.status(200).json({
    success: true,
    message: "All Projects Fetched Successfully ",
    allProjects,
  });
});

exports.getSingleProjects = catchAsyncErrors(async (req, res, next) => {
  const project = await Project.findOne({ projectId: req.params.id });

  res.status(200).json({
    success: true,
    message: "Project Fetched Successfully ",
    project,
  });
});
