//Path Module 
var p=require("path")
var path="D:/LJ/node/my.html";
var d=p.dirname(path);
var b=p.basename(path);
var e=p.extname(path);
var p1=p.parse(path);
console.log(`Directory : ${d} \n File : ${b} \n Extention : ${e}`);
console.log(p1)

// Output -------
//Directory : D:/LJ/node 
//  File : my.html
//  Extention : .html
// {
//   root: 'D:/',
//   dir: 'D:/LJ/node',
//   base: 'my.html',
//   ext: '.html',
//   name: 'my'
// }