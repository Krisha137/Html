// Write an ExpressJS REST API script to create an array of JSON objects named employee_data having 
// properties: Emp_id Name Department Salary Experience When the user 
// requests: /employees → It should display all employees data. 
// /employees/:id → It should display data of the employee whose Emp_id matches the given id.
//  Example: /employees/3 → Display data of employee with Emp_id 3.

var express = require("express");
var app = express();
var api = require("./employes");
app.use("/employees", api);
app.listen(5000);