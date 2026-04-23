// express-session 

var express = require("express");
var app = express();

var session=require("express-session");
app.use(session({secret:'LJ123',
                resave:false,
                saveUninitialized:false,
                cookie:{maxAge:10000},
            //  name:"my" // (for change name of cookie)
}));
app.get("/",(req,res)=>{
    if(req.session.page_views){
        req.session.page_views++;
        res.send(`<h1 style=color:red> You Have visited ${req.session.page_views} </h1>`);
    }
    else{
        req.session.page_views=1;
        res.send(`<h1> Welcome to my website</h1>`);
    }
})
// In Exam write only this --> app.use(session({secret:'LJ123'}))
app.listen(5000);


// Output--------------

// Welcome to my website             at first time then 
// You Have visited (2,3,4,5,....)