const express = require("express");

const {
  adminGetLogic,
  adminPostLogic,
} = require("../controllers/adminContoller");

const router = express.Router();

router.get("/add-product", adminGetLogic);

router.post("/add-product", adminPostLogic);

module.exports = router;
