var express=require("express");
var app=express();

// app.get(Path,callback);
//    .put
//    .post
//    .delete
//    .listen(5001,Domain_Name,Backlog(waiting),()=>c.l("end"))
//    .listen(5001,localhost,100,()=>c.l("end"))

app.get("/",(req,res)=>{
   // res.set("Content-type","text/html");  or
  //  res.setHeader("Content-Type","text/html");  or
    res.type("text/html");  // easy
    res.write("<h3>Hello B2 Student</h3>");
    res.end();
});

app.get("/about",(req,res)=>{
    res.type("text/html"); // If you don't set Header then bydefult it will in plain text
    res.write("<h2>Hello</h2>");
    res.send();

    // res.send("<h3>About Page</h3>"); //Error : Cannot set headers after they are sent to the client

    // If you write by write then send must be empty 
    // End If send have data then no need to write
});

app.listen(7001,()=>{console.log("Server Started")});