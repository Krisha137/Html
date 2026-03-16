//Path Module 
var p=require("path")
var path="D:/LJ/node/myhtml";
var d=p.dirname(path);
var b=p.basename(path);
var e=p.extname(path);
var p1=p.parse(path);
console.log(`Directory : ${d} \n File : ${b} \n EXtention : ${e}`);
console.log(p1)

// Output -------
// Directory : D:/LJ/node 
//  File : myhtml
//  EXtention :
// {
//   root: 'D:/',
//   dir: 'D:/LJ/node',
//   base: 'myhtml',
//   ext: '',
//   name: 'myhtml'
// }