var eventemitter=require("events")
var ee=new eventemitter();
var fun1=(m)=>{
    console.log(`fun 1 msg :${m}`)}
var fun2=(m)=>{
    console.log(`fun 2 msg :${m}`)}
                 
ee.on("e1",fun1) // fun 1 msg :Hello Students!
ee.on("e1",fun2) // fun 2 msg :Hello Students!
ee.on("e2",fun1) // fun 1 msg :Event Module
ee.on("e2",fun2) // fun 2 msg :Event Module 
var c1=ee.listenerCount("e1")
console.log(c1) // 2 2
ee.removeListener("e2",fun1) // remove fun1 of e2
var c2=ee.listenerCount("e2")
console.log(c2) // 2 1
ee.removeAllListeners("e1") // remove all events of all functions
var c=ee.listenerCount("e1")
console.log(`e1 evet has ${c} Listeners`)
ee.emit("e1","Hello Students!")
ee.emit("e2","Event Module")