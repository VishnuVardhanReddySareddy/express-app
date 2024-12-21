const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action = "/product" method = "POST"><input type="text" name="title" placeholder ="name of product" /><br><br><input type = "number" name = "size" placeholder = "Enter size of product"><br><br><button type="submit">Add</button></form>'
  );
});

app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>This is home page</h1>");
});
const port = 3000;

app.listen(port, () => {
  console.log("server is running on port 3000");
});
