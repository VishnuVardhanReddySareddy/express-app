const express = require("express");
const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use("/admin", adminRouter);
app.use("/shop", shopRouter);

app.get("/", (req, res, next) => {
  res.status(404).send("<h1>This is home page");
});

app.use((req, res, next) => {
  res.status(404).send("<h1>Page Not Found");
});

const port = 3000;

app.listen(port, () => {
  console.log("server is running on port 3000");
});
