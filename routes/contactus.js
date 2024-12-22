const express = require("express");

const contactUs = require("../controllers/contact");

const router = express.Router();

router.get("/contactus", contactUs);

module.exports = router;
