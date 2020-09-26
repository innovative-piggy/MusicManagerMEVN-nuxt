const express = require("express");
const router = express.Router();
const musicController = require("../controller/musicController");
const multer = require("../../config/multer");

router.get("/",  musicController.getAllMusics);
router.post("/", multer.upload.single("music"), musicController.addNewMusic);
router.delete("/:musicId", musicController.deleteMusic);

module.exports = router;
