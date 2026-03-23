// Fatch marks from url and write into the marks.txt file

var fs=require("fs")
var url=require("url")
var p="https://www.example.com/test?t1=20&t2=25&t3=22&t4=21"
var up=url.parse(p,true)
var t1=up.query.t1
var t2=up.query.t2
var t3=up.query.t3
var t4=up.query.t4
var total=parseInt(t1)+parseInt(t2)+parseInt(t3)+parseInt(t4)
fs.writeFileSync("marks.txt"," Marks of T1 = "+t1+"\n Marks of T2 = "+t2+"\n Marks of T3 = "+t3+"\n Marks of T4 = "+t4+"\n Total Marks = "+total)

// Output in marks.file -------------                                     
//  Marks of T1 = 20
//  Marks of T2 = 25
//  Marks of T3 = 22
//  Marks of T4 = 21
//  Total Marks = 88