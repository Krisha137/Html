// https Module

var http=require("http");
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"}); // text/plain --> it an not consider html tags
    res.write("<h1>Welcome Students</h1>");
    res.end("<h3>End</h3>");// Allowed
    res.end();// After this not allowed anything
    // res.end("Ended") error
}).listen(5001,()=>{console.log("Server Started at http://localhost:5001")});

// on localhost:5001
// Welcome Students

// var http=require("http");
// http.createServer((req,res)=>{
//     res.writeHead(200,{"Content-Type":"text/plain"});
//     res.write("<h3>Welcome Students</h3>");
//     res.end();
// }).listen(5001,()=>{console.log("Server Started at http://localhost:5001")});


// <h3>Welcome Students</h3