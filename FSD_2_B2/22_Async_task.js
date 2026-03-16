var fs = require("fs");
fs.writeFile("help.txt", "You are creating the file", (e) => {
  if (e) throw e;
  else {
    console.log("Written")
    fs.appendFile("help.txt", "\nYou are appending the data.", (e) => {
      if (e) throw e;
      else {
        console.log("Appended")
        fs.readFile("help.txt", "utf-8", (e, data) => {
          if (e) throw e;
          else{
            console.log(data);
            fs.copyFile("help.txt","test1.txt",(e)=>{
                if(e) throw e;
                else{
                    console.log("Copied")
                    fs.unlink("help.txt",(e)=>{
                        if(e) throw e;
                        console.log("Thank you for using my program")
                    })
                }
            })
          }
        });
      }
    });
  }
});
// Output ---------
// Written
// Appended
// You are creating the file
// You are appending the data.
// Copied
// Thank you for using my program