// Event Module

var eventemitter=require("events")
var ee=new eventemitter();
// ee.emit(event,arg1,arg2);
// ee.on(event,(p1,p2)=>{})
// ee.addListener(",")
// ee.removeListener(event)
// ee.removeAllListeners(event)


// ee.on("start",()=>{console.log("First EXE")}) // First EXE
// ee.emit("start")

ee.emit("start")
ee.on("start",()=>{console.log("First EXE")}) // No Output 

// ee.on("add",(a,b)=>{console.log(`Addition is : ${a+b}`)})
// ee.on("add",()=>{console.log("Done")})
// ee.emit("add",5,10) // Addition is : 15
//                     // Done
                    

// ee.on("add",()=>{console.log("Done")})
// ee.on("add",(a,b)=>{console.log(`Addition is : ${a+b}`)})
// ee.emit("add",5,10) // Done
//                     // Addition is : 15



// ee.on("add",()=>{console.log("Done")})
// ee.emit("add",5,10) // Done



// ee.on("add",(a,b)=>{console.log(`Addition is : ${a+b}`)})
// ee.emit("add",5,10) // Addition is : 15


ee.on("add",(a,b)=>{console.log(`Addition is : ${a+b}`)})
ee.on("add",()=>{
    console.log("Done");
    ee.emit("success")
})
ee.on("success",()=>{
    console.log("Task Completed");
})
ee.emit("add",5,10) // Addition is : 15
                    // Done
                    // Task Completed