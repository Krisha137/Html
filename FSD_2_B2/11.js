var fs=require("fs")
// fs.mkdirSync("abc")
fs.writeFileSync("temp.txt","Hello World") // It will create file out of abc foulder
var a=fs.readFileSync("temp.txt")
console.log(a.toString()) // Hello World
fs.writeFileSync("abc/temp.txt","Hello") //  It will create file in the abc foulder
var r=fs.readFileSync("abc/temp.txt")
console.log(r) // <Buffer 48 65 6c 6c 6f>
console.log(r.toString()) // Hello
fs.appendFileSync("temp.txt","\n How are ypu ?")
var r1=fs.readFileSync("temp.txt")
console.log(r1.toString()) // Hello World
                           // How are ypu ?
var r1=fs.readFileSync("temp.txt","utf-8") // It will not return data in buffer because of utf-8.
console.log(r1) // Hello World
                // How are ypu ?
fs.renameSync("temp.txt","New.txt") // Rename the file name
// fs.unlinkSync("temp.txt") // Error because of rename
// fs.unlinkSync("New.txt") // file will be delete
fs.rmdirSync("abc") // It will can't delete because there already file exsist 
       