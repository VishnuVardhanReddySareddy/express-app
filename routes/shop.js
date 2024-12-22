const express = require("express");
const shopLogic = require("../controllers/shopController");

const router = express.Router();

router.get("/"), shopLogic;

module.exports = router;
