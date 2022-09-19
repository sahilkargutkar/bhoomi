const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.sendAttachment = catchAsyncErrors(async (req, res, next) => {
  if (!req.files) {
    res.send({
      status: "failed",
      message: "No file uploaded",
    });
  } else {
    let file = req.files.file;

    file.mv("./uploads/" + file.name);

    res.send({
      status: "success",
      message: "File is uploaded",
      data: {
        name: file.name,
        mimetype: file.mimetype,
        size: file.size,
      },
    });
  }
});
