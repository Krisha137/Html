var express = require("express");
var app = express();

// app.use(express.urlencoded()); // not required in get method

app.get("/",(req,res)=>{
    res.send(`<form action='/data' method='get'>
        <input type='text' name='un' /><br>
        <input type='password' name='pass' />
        <button type='submit'>Submit</button>
        </form>`) //tejas dada  thakkr123
})

app.get("/data",(req,res)=>{
    const b=req.query;
    console.log(b);
    const n=req.query.un;
    const p=req.query.pass;
    res.send(`<h1>Welcome ${n} <br><br>
        Your password id : ${p}</h1>`) // Welcome tejas dada
                                       // Your password id : thakkr123
})

app.listen(5000);