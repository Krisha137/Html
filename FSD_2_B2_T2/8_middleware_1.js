var express = require("express");
var app = express();

//Syntex's -----

// app.use("/",(req,res,next)=>{
//     next();
// })

// app.get("/",(req,res)=>{
//     res.send();
// })

// var mw1=(req,res,next)=>{}

// app.use(path,mw1,mw2,...)
// app.get(path,(req,res)=>{})

// app.get("/login",mw1,mw2(req,res)=>{})

var first = (req, res, next) => {
  console.log("First Middleware");
  next();
};
var second = (req, res, next) => {
  req.name = "Dharti";
  console.log("Second Middleware");
  next();
};
var third = (req, res, next) => {
  req.marks = 25;
  console.log("Third Middleware");
  next();
};

app.use("/test", first, third);
app.get("/test", (req, res) => {
  res.send("My Page"); 
                        // In Browser-----
                       // My Page
                       // In Cosole ------
                       // First Middleware
                       // Third Middleware
});
app.get("/all", first, second, third, (req, res) => {
  res.send(`<h1>Hello ${req.name}</h1>
      <h2>Your Marks is : ${req.marks}</h2>`); 
                                               // In Browser-----
                                               // Hello Dharti
                                               // Your Marks is : 25
                                               // In Cosole ------
                                               // First Middleware
                                               // Second Middleware
                                               // Third Middleware
});
app.listen(5001);
