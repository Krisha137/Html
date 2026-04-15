var express = require("express");
var app = express();

app.use(express.urlencoded());

app.get("/",(req,res)=>{
    res.send(`<form action='/data' method='post'>
        <input type='text' name='un' />
        <button type='submit'>Submit</button>
        </form>`) //nidhi
})

app.post("/data",(req,res)=>{
    const b=req.body;
    console.log(b);
    const n=req.body.un;
    res.send(`<h1>Welcome ${n}</h1>`) // Welcome nidhi
})

app.listen(5000);