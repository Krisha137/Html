// write a script to meet following requirements:
// •	Create index.html file page which contains form(username,password,login button).
//     and open it on localhost. 
// •	After clicking submit button, it should jump on “savesession” page. Store username 
//     and password in session.
// •	After saving se	ssion, redirect to “fetchsession” page and read value. Put a LOGOUT
//      link here.
// •	Jump on delete session page after clicking LOGOUT link. 
// •	Destroy the session on this page and redirect to index.html page.


var express = require("express");
var app = express();

var s = require("express-session");
app.use(s({ secret: "123"}));

app.use(express.urlencoded());

app.use(express.static(__dirname));
app.post("/savesession", (req, res) => {
  req.session.un = req.body.un;
  req.session.pass = req.body.pass;
  res.redirect("fetchsession");
});
app.get("/fetchsession", (req, res) => {
  res.send(`Welcome ${req.session.un} !
        <a href='/deletesession' >Logout</a>`);
});
app.get("/deletesession", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});
app.listen(5000);
