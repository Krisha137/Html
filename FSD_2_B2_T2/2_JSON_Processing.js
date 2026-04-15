// JSON Processing

var express = require("express");
var app = express();
obj = [
  { name: "x", age: 30 },
  { name: "y", age: 15 },
  { name: "z", age: 45 },
];
app.get("/api", (req, res) => {
  res.send(obj);
});

app.get("/api1", (req, res) => {
  res.json(obj);
});

app.get("/api2", (req, res) => {
  // res.write(obj); // TypeError [ERR_INVALID_ARG_TYPE]
  res.write(JSON.stringify(obj));
  res.send();
});

app.get("/task", (req, res) => {
  x = obj.sort((a, b) => b.age - a.age);
  res.type("text/html");
  res.write(`<table border>
        <thead>
        <tr>
        <th>Name</th>
        <th>Age</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>${x[0].name}</td>
        <td>${x[0].age}</td>
        </tr>
        <tr>
        <td>${x[1].name}</td>
        <td>${x[1].age}</td>
        </tr>
        <tr>
        <td>${x[2].name}</td>                                                  
        <td>${x[2].age}</td>
        </tr>
        </tbody>
        <table>
        `);
        //  another way

        // for (i of x){
        //     res.write(`<table border><tr><td>${(i.name)}</td>
        //         <td>${(i.age)}</td></tr></table>`)
        // }
});

app.listen(7002);
