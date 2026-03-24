/* Write node.js script to print “Welcome to Home Page” with two links containing
      two pages named as “About Us” and “Contact Us” on home page of server. If user request
       for About Us page it should display “Welcome to LJ University” in bold font-style with 
       blue color and if user request for Contact Us page it should display 
       “Email:abc@ljinstitutes.edu.in” in italic font-style with red color if any other request
        is requested it shows “Page not found” message in plaintext. */
var http=require("http");
var fs=require("fs")
http.createServer((req,res)=>{
    if(req.url=="/"){
        res.writeHead(200,{"Content-type":"text/html"})
        res.end(`<h1>Welcome Home Page</h1><br><a href="/about">About</a> <a href="/contact">Contact As</a>`)
    }
    else if(req.url==="/about"){
        res.writeHead(200,{"Content-type":"text/html"})
        res.write(`<p style="font-style: bold;color: blue;">Welcome to LJ University</p>`)
        res.write(`<h2>lorem<h2>`)
        res.end("Hi")
    }
    else if(req.url==="/contact"){
        res.writeHead(200,{"Content-type":"text/html"})
        res.end(`<p style="font-style: italic;color: red;">Email:abc@ljinstitutes.edu.in</p>`)
    }
    else{
        res.writeHead(404,{"Content-type":"text/plain"})
        res.end("Page Not Found")
    }
   
}).listen(5003)