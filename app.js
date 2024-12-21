const express = require("express");

const app = express();

app.use((request, response, next) => {
  next();
});

app.use((request, response, next) => {
  response.send("<h1> This is hello from Express</h1>");
});

const port = 3000;

app.listen(port, () => {
  console.log("server is running on port 3000");
});
