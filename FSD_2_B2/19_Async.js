// Sync and Async Example
var fs=require("fs");
fs.writeFileSync("19.txt","Hello ! How are you");
console.log("Syncronus Operation Done")
fs.writeFile("19a.txt","Hi",function(e){
    if(e)
        {
            console.log(e)
        }
    else{
        console.log("Asyncronus Task Completed")
    }})
console.log("Last Line")