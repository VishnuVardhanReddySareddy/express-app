const rootDir = require("../util/path");
const path = require("path");

const contactusLogic = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contactus.html"));
};

module.exports = contactusLogic;
