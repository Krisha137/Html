var express = require("express");
// no need to create app
var router=express.Router();

var obj=[{'name':'A','id':"001",'age':20,'city':"Ahmedabad",'branch':"CSE"},
        {'name':'B','id':"002",'age':21,'city':"Surat",'branch':"CE"},
        {'name':'C','id':"003",'age':22,'city':"Anand",'branch':"IT"},
        {'name':'D','id':"004",'age':23,'city':"Nadiyad",'branch':"CS"},
        {'name':'E','id':"005",'age':24,'city':"Gandginagar",'branch':"CS&IT"},
        {'name':'F','id':"006",'age':25,'city':"Bhavnagar",'branch':"AI"}
]
router.get("/",(req,res)=>{
    res.type("text/html");
    for(o of obj){
        res.write(`<h1>Name  : ${o.name}
                       ID : ${o.id}
                       Age : ${o.age}
                       City : ${o.city}
                       Branch : ${o.branch}</h1>`);
    }
    res.send();
})

router.get("/id/:id",(req,res)=>{
    var data=obj.filter((o)=>o.id==req.params.id)
    if(data.length>0){
        res.send(data);
    }
    else{
        res.send("No Such Student Available.")
    }
})

router.get("/branch/:branch",(req,res)=>{
    var data=obj.filter((o)=>o.branch.toLowerCase()==req.params.branch.toLowerCase())
    if(data.length>0){
        res.send(data);
    }
    else{
        res.send("No Such Student Available.")
    }
})
module.exports=router;