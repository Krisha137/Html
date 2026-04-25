// REST api;
// REpresentational State Transfer

var express = require("express");
var app = express();
var api = require("./student");
app.use("/students", api);
app.listen(5000);

// http://localhost:5000/students   -------------

// Name : A ID : 001 Age : 20 City : Ahmedabad Branch : CSE
// Name : B ID : 002 Age : 21 City : Surat Branch : CE
// Name : C ID : 003 Age : 22 City : Anand Branch : IT
// Name : D ID : 004 Age : 23 City : Nadiyad Branch : CS
// Name : E ID : 005 Age : 24 City : Gandginagar Branch : CS&IT
// Name : F ID : 006 Age : 25 City : Bhavnagar Branch : AI

// http://localhost:5000/students/id/001   -------------

// [{"name":"A","id":"001","age":20,"city":"Ahmedabad","branch":"CSE"}]

// http://localhost:5000/students/id/020   ---------------

// No Such Student Available.

// http://localhost:5000/students/branch/cse   -----------------

// [{"name":"A","id":"001","age":20,"city":"Ahmedabad","branch":"CSE"}]

// http://localhost:5000/students/branch/cse&IT   ---------------------

// No Such Student Available.
