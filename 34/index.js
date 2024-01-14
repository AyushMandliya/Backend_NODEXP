const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs"); //embeded javascript
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/rand", (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  res.render("rand.ejs", { num });
});

app.listen(3000, () => {
  console.log("Listen to the port 3000");
});
