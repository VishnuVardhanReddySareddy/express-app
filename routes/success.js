const express = require("express");

const successLogic = require("../controllers/success");

const router = express.Router();

router.post("/success", successLogic);

module.exports = router;
