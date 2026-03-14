const shape=[
            {"name":"circle",
                "d":8
            },
            {"name":"Square",
                "d":10
            },
        ]    
var fs=require("fs")
var d1=2*3.14*shape[0].d
var d2=4*shape[1].d
fs.writeFileSync("17task.txt",`${shape[0].name} ${d1} \n ${shape[1].name} ${d2}`) // circle 50.24 
                                                                                  // Square 40
// fs.appendFileSync("17task.txt",shape) // ERR_INVALID_ARG_TYPE                                                                                