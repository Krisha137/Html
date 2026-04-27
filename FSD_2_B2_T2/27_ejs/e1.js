// EJS => Embeded Java Script

// var path=require("path");
var express = require("express");
var app = express();

app.set("view engine", "ejs");
// app.set("views",path.join(__dirname))    // If you gave any other name rather then views then use it
app.get("/", (req, res) => {
  res.render("e1")
});
app.listen(5000);


// Output-------------

// <b> Nidhi </b>
// Nidhi
// <% This is EJS %>
