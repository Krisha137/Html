// accepts get req with dynamic user id in url
// also accepts additional data name,age using query parameters
//  1. extracts id from route para.
//  2. extract age and name from string para.

// Welcome "xyz"
// Your user id is : "123".


//http://localhost:5000/userid/101?name=nidhi&age=50

var express = require("express");
var app = express();

app.get("/userid/:id",(req,res)=>{
    res.type("text/html");
    res.write(`<h1>Welcome ${req.query.name}<br><br>
        Your user ID : ${req.params.id}<br><br>`)
    if (req.query.age <18){
        res.write("You are Minor")
    }
    else {
        res.write("You are adult")
    }
//     Welcome nidhi
//     Your user ID : 101
//     You are adult
})


app.listen(5000);