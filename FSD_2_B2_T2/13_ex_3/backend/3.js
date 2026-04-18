var express = require("express");
var app = express();

var path = require("path");
var sp = path.join(__dirname, "../frontend");
app.use(express.static(sp, { index: "3.html" }));
app.listen(5000);

// Other option but it will only for 3.html
// app.get("/",(req,res)=>
// {
//     res.sendFile(sp+"/3.html")
// })

// like this -------

// var path = require("path");
// var sp = path.join(__dirname, "../frontend");
// app.use(express.static(sp));
// app.get("/", (req, res) => {
//   res.sendFile(sp + "/3.html");
// });
// app.listen(5000);
