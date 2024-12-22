const express = require("express");
const rootDir = require("../util/path");
const path = require("path");

const router = express.Router();

// Route for /success page (success message page)
router.post("/success", (req, res, next) => {
  // Handle form submission here (optional, like saving the form data)
  console.log(req.body); // You can log or process the data if needed

  // After submission, render the success page
  res.sendFile(path.join(rootDir, "views", "success.html"));
});

module.exports = router;
