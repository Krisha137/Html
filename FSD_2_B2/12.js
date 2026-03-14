var fs=require("fs")
//fs.mkdirSync("fs")
fs.writeFileSync("fs/my.txt","B2 Student")
fs.appendFileSync("fs/my.txt","\n Node JS tutorial")
var r=fs.readFileSync("fs/my.txt","utf-8")
fs.writeFileSync("fs/mynew.txt","\n JSON Completed")
fs.appendFileSync("fs/mynew.txt",r)
fs.unlinkSync("fs/my.txt")
var r1=fs.readFileSync("fs/mynew.txt","utf-8")
console.log(r1) // JSON CompletedB2 Student
                // Node JS tutorial
fs.copyFileSync("fs/mynew.txt","New.txt")