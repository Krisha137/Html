var express = require("express");
var app = express();

var path=require("path");
var sp=path.join(__dirname,"../frontend")
app.use(express.static(sp,{index:"3.html"}));
app.listen(5000);