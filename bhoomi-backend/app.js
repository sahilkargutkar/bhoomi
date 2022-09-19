const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const errorMiddleware = require("./middleware/error");
const fileupload = require("express-fileupload");

//
app.use(express.json());
// app.use(fileupload());
app.use(express.static("files"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  fileupload({
    createParentPath: true,
  })
);

//routes
const project = require("./routes/projectRoutes");
const file = require("./routes/fileRoutes");

app.use("/api/v1", project);
app.use("/api/v1", file);

app.use(errorMiddleware);

module.exports = app;
