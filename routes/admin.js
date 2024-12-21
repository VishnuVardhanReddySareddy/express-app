const express = require("express");

const router = express.Router();

router.use("/add-product", (req, res, next) => {
  res.send(
    '<form action = "/admin/product" method = "POST"><input type="text" name="title" placeholder ="name of product" /><br><br><input type = "number" name = "size" placeholder = "Enter size of product"><br><br><button type="submit">Add</button></form>'
  );
});

router.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
