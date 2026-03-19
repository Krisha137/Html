//  write programto make a folder and a file by path+fs method then write something in it and 
// then make new file by path+fs method end copy the file from first file and then delete the previose file

var p=require("path")
var fs=require("fs")
var path="myfile/first.txt"
var base=p.basename(path); // first.txt
var dir=p.dirname(path); // myfile
var newpath=dir+"/"+base;
fs.mkdir(dir,(e)=> {
     if(e){
        throw e;
     } 
     else{
        console.log("Folder Created")
     }

});
fs.writeFile(newpath,"Hello",(e)=>{
    if (e)
        {
            throw e;}
    else{
        fs.copyFile(newpath,dir+"/second.txt",(e)=>{
            if(e){
                throw e;
            }
            else{
                fs.unlink(newpath,(e)=>{
                    if(e){
                        throw e;
                    }
                    else{
                        console.log("TASK Completed.")
                    }
                })
            }
        })
    }
})

// Output -----  
// Folder Created
// TASK Completed