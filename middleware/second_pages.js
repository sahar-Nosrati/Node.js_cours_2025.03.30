const express = require("express"); 
const route = express.Router();
const path = require("path");

route.get("/spring-equinox(.html)?", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "views", "second_pages", "spring-equinox.html")
  );
});
route.get("/Nowrouz(.html)?", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "views", "second_pages", "Nowrouz.html")
  );
});
route.get("/haftsin(.html)?", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "views", "second_pages", "haftsin.html")
  );
});

module.exports = route; 