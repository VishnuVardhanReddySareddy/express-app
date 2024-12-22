const rootDir = require("../util/path");
const path = require("path");

const shopLogic = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
}

module.exports = shopLogic;