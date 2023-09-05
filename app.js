const express = require("express");
const ejs = require("ejs");

const db = require("./data/database");
const tooDuRoutes = require("./routes/tooDuRoutes");
const path = require("path");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
app.use(tooDuRoutes);

// app.use(function (error, req, res, next) {
//   res.render("500");
// });

db.connectToDatabase().then(function () {
  app.listen(port);
});
