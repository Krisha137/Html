// root and qurey

var express = require("express");
var app = express();

// http://localhost/product/101/cat/kids?age=5&gender=girl

app.get("/product/:pid/cat/:c",(req,res)=>{

    // Root
    
    // res.send(req.params); // {"pid":"101","cat":"kids"}
   // res.write(`<h1>Product Id is :${req.params.pid}<br><br> 
   //     Product Category is :${req.params.c}`) // Product Id is :101 
                                               // Product Category is :kids

    // Query 

    res.send(req.query); // {"age":"5","gender":"girl"}
})

app.listen(5000);