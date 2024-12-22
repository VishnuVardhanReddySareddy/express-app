const express = require("express");
const errorLogic = require("./controllers/errorController");
const path = require("path");
const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");
const contactusRouter = require("./routes/contactus");
const successRouter = require("./routes/success");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRouter);
app.use(shopRouter);
app.use(contactusRouter);
app.use(successRouter);

app.get("*", errorLogic);

const port = 3000;

app.listen(port, () => {
  console.log("Server is running on port 3000");
});
