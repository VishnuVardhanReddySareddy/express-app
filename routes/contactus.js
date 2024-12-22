const express = require("express");
const rootDir = require("../util/path");
const path = require("path");

const router = express.Router();


router.get("/contactus", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contactus.html"));
});

module.exports = router;
