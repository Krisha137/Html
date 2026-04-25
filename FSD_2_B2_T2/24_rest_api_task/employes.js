var express = require("express");
// no need to create app
var router=express.Router();

var obj=[{'name':'A','eid':"001",'Salary':20000,'Experience':"Good",'Department':"CSE"},
        {'name':'B','eid':"002",'Salary':21000,'Experience':"Better",'Department':"CE"},
        {'name':'C','eid':"003",'Salary':22000,'Experience':"Excelent",'Department':"IT"},
        {'name':'D','eid':"004",'Salary':23000,'Experience':"Apriciate",'Department':"CS"},
        {'name':'E','eid':"005",'Salary':24000,'Experience':"Very Good",'Department':"CS&IT"},
        {'name':'F','eid':"006",'Salary':25000,'Experience':"Excelent",'Department':"AI"}
]
router.get("/",(req,res)=>{
    res.type("text/html");
    for(o of obj){
        res.write(`<h1>Name  : ${o.name}
                       Employee ID : ${o.eid}
                       Salary : ${o.Salary}
                       Experience : ${o.Experience}
                       Department : ${o.Department}</h1>`);
    }
    res.send();
})

router.get("/id/:eid",(req,res)=>{
    var data=obj.filter((o)=>o.eid==req.params.eid)
    if(data.length>0){
        res.send(data);
    }
    else{
        res.send("No Such Student Available.")
    }
})

module.exports=router;