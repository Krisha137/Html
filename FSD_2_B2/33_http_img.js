var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
   // res.end("<img src='img.jpg'>")  --> it will not gave you img you have to first request to server 
    if(req.url=="/"){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.end("<img src='img.png'/>");
    }
    else if(req.url==="/img.png"){
        var i=fs.readFileSync("img.png");
        res.writeHead(200,{"Content-type":"image/png"})
        res.end(i)
    }
    else{
        res.writeHead(404,{"Content-type":"text/html"})
        res.end("<h2>Page Not Found</h2>")
    }
   
}).listen(5003)