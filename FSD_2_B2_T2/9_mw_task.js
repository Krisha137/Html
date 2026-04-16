// Write an ExpressJS application that creates a login form containing 
// fields for username and password along with a submit button.
//  The form data should be sent to the server using the POST method.
//  Implement an authentication middleware that checks whether the 
// entered username is "admin" and the password is "1234".
//  If the credentials are correct, the application should display
//  the message "Login Successful". Otherwise, it should display 
// "Invalid Credentials".

var express = require("express");
var app = express();

app.use(express.urlencoded());

var check = (req, res, next) => {
  req.uname = "admin";
  req.pass = "1234"
  console.log("Third Middleware");
  next();
};
app.get("/",(req,res)=>{
    res.send(`<form action='/data' method='post'>
        <input type='text' name='un' />
        <input type='password' name='pass' />
        <button type='submit'>Submit</button>
        </form>`) 
})

app.post("/data",check,(req,res)=>{
    const n=req.body.un;
    const p=req.body.pass;
    if (n===req.uname & p===req.pass){
        res.write("Login Successfully.")
    }
    else{
        res.write("Invalid Credentials")
    }
    res.send() 
})

app.listen(5000);