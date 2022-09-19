const { sendAttachment } = require("../controllers/fileController");

const router = require("express").Router();

router.route("/sendAttachment").post(sendAttachment);

module.exports = router;
