const rootDir = require("../util/path");
const path = require("path");

const successLogic = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "success.html"));
};

module.exports = successLogic;
