var eventemitter=require("events")
var ee=new eventemitter();
ee.on("Circle",(r,s)=>{
    if (r<0){
        console.log("Radius is negative.")
    }
    else{
        console.log(`Peremeter Of Circle is ${2*3.14*r}`)
        if (s<0){
            console.log("Side is negative.")
        }
        else{
            console.log(`Peremeter Of Rectengle is ${2*(s+r)}`)
        }
    }
    
})
ee.emit("Circle",3,2) // Peremeter Of Circle is 18.84
                      // Peremeter Of Rectengle is 10
ee.emit("Circle",-3,2) // Radius is negative.

ee.emit("Circle",3,-2) // Peremeter Of Circle is 18.84
                       // Side is negative.

ee.emit("Circle",-3,-2) // Radius is negative.