const {
  createProject,
  getAllProjects,
  getSingleProjects,
} = require("../controllers/projectController");

const router = require("express").Router();

router.route("/create/new").post(createProject);

router.route("/projects").get(getAllProjects);

router.route("/project/:id").get(getSingleProjects);

module.exports = router;
