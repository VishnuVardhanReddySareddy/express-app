const express = require("express");
const path = require("path");
const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");
const contactusRouter = require("./routes/contactus");
const successRouter = require("./routes/success");

const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/admin", adminRouter); // Admin routes
app.use(shopRouter); // Shop routes
app.use(contactusRouter); // Contact Us route
app.use(successRouter); // Success route

// 404 Error handling route
app.get("*", (req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

const port = 3000;

app.listen(port, () => {
  console.log("Server is running on port 3000");
});
