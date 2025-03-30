const express = require("express"); 
const route = express.Router();
const path = require("path");


route.get("^/$|index(.html)?", (req, res) =>{
  res.sendFile(path.join(__dirname, "..","views","index.html")); 
})
route.get("/new-page(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..","views","new-page.html"));
})
route.get("/old-page(.html)?", (req, res) => {
  res.redirect(301, "/new-page.html"); 
})
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