const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/contacto", function (req, res) {
  res.render("contacto");
});

app.get("/productos", function (req, res) {
  res.render("productos");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
