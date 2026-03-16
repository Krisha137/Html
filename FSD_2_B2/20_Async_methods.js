// Afs --> Asyncronus File System 
 var fs=require("fs");
// fs.mkdir("afs",(e)=>{
//     if(e) throw e;
//     console.log("Folder Created")
// });
// fs.writeFile("afs/my.txt","Asyncronus Task",(e)=>{ // 3rd Argument is Callback
//     if(e) throw e;
//     console.log("Writen");
// })
// fs.appendFile("afs/my.txt","Hi",(e)=>{
//     if(e) throw e;
//     console.log("Appended");
// })
// fs.readFile("afs/my.txt","utf-8",(e,data)=>{
//     if(e) throw e;
//     console.log(data);
// })
// fs.rename("afs/my.txt","afs/new.txt",(e)=>{
//     if(e) throw e;
//     console.log("Renamed")
// });
// fs.unlink("afs/my.txt",(e)=>{
//     if(e) console.log("No Such File Found"+e);
//     console.log("Deleted")
//  })
// fs.copyFile("afs/new.txt","mynew.txt",(e)=>{
//     if(e) throw e;
//     console.log("Content Copied")
// })
fs.rmdir("afs",(e)=>{
    if(e) throw e;
    console.log("Folder Deleted.")
})