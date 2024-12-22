const path = require("path");

const rootDir = require("../util/path");

const adminGetLogic = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-products.html"));
};

const adminPostLogic = (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
};

module.exports = {
  adminGetLogic,
  adminPostLogic,
};
