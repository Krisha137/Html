var express = require("express");
var app = express();

var cp=require("cookie-parse");
app.use(cp());
app.get("/",(req,res)=>{
    //res.cookie(name of cookie,value of cookie)
    res.cookie("fname","ABC");
    res.cookie("lname","XYZ");
    res.cookie("Subject","FSD-2",{maxAge:5000}); // it will expier after 5 sec
    res.send(req.cookies);// it will return object of all cookies
});
app.listen(5000);