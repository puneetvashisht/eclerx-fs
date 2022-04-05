"use strict";
var _03_Export_1 = require("./03-Export");
var emp = new _03_Export_1.PermanentEmployee("Miley Cyrus", 214);
emp.doWork();
var allEmp = require("./04-ExportAlias");
var emp2 = new allEmp.PermanentEmployee("Thomus", 5211);
emp2.doWork();
