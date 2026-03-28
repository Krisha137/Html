// TASK - 3
// Write node js script to fetch values from url given below and display output as asked.
// "https://www.google.com/exam.txt?c1=Hello&c2=FSD2 T1 Test&c3=Welcome to LJU#AllTheBest"
// 1) Data must be written as below in file named “exam.txt”. File name must be fetched from the url given above.
// Output:
// Hello!
// Welcome to LJU FSD2 T1 Test
// #AllTheBest
// 2) Read content from file “exam.txt” and send response to server and display data in “/” page in same format as above but in H1 tag and in red color.
// 3) If any other page is requested it shows “Page not found” message in plain text.

// TASK - 4
// Create HTTP webpage on which Home page display “Welcome to Log in page” in blue color and font size must be 32px, Login page shows one HTML file from static URL having Form with detail for Username, Password, submit and reset button,   Gallery page   reflect one Image “hello.jpg” and any other page shows “Page Not found”.  
// Write all necessary files to perform task. (Image already exist in same folder)

// TASK - 5
// Write a Node.js program using the HTTP module to create a server that sends a JSON response when the user visits the /api route.The JSON object should contain:name as "Rahul", course as "NodeJS",status as "Enrolled"Set the appropriate header for JSON data and display "404 – Page Not Found" for any other route.


var url=require("url")
var fs=require("fs")
var http=require("http")
addr="https://www.google.com/exam.txt?c1=Hello&c2=FSD2 T1 Test&c3=Welcome to LJU#AllTheBest"
var path=url.parse(addr,true);
// console.log(path)
fs.writeFileSync("."+path.pathname,path.query.c1 +"!\n"+ path.query.c3 +" " + path.query.c2 + "\n" + path.hash)
http.createServer((req,res)=>{
    if(req.url==="/home"){
        var r=fs.readFileSync("."+path.pathname,"utf-8")
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end(`<h1 style='color:red'> <pre> ${r} </pre> </h1>`);
    }
    else if(req.url==="/about"){
        var i=fs.readFileSync("img.png")
        res.writeHead(200,{"Content-Type":"image/png"});
        res.end(i);
    }
    else if(req.url==="/api"){
        var d={"name":"Rahul","Cource":"Node Js","Enrolled":"Yes"}
        res.writeHead(200,{"Content-Type0":"applicatin/json"})
        res.end(JSON.stringify(d))
    }
    else{
        res.writeHead(404,{"Content-Type":"text/plain"});
        res.end("Page Not Found");
    }
}).listen(7007);