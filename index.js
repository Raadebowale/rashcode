const express = require("express");
const { engine } = require("express-handlebars");

const app = express();
const dotenv = require("dotenv");
dotenv.config();
const { extname } = require("path");

app.engine("hbs", engine({ extname: ".hbs", defaultLayout: "index" }));
app.set("view engine", "hbs");

const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("pages/index");
});
app.get("/index", (req, res) => {
  res.render("pages/index");
});
app.get("/single", (req, res) => {
  res.render("pages/single");
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
