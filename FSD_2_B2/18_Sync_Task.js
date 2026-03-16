// Write a Node.js program using fs synchronous methods to read a file, count the number of vowels in its content, and append the vowel count to the same file. 
var fs=require("fs")
fs.writeFileSync("18.txt","Hi! How are You? \n Welcome to Lj Univercity!")
var r=fs.readFileSync("18.txt","utf-8")
var i=0;
var v="aeiouAEIOU"
for (let a=0;a<r.length;a++){
    if (v.includes(r[a])){
        i++;
    }
}
fs.appendFileSync("18.txt","\nNumber Of vovel is :"+i)
console.log("Task Completed")