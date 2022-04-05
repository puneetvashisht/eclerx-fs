"use strict";
var PermanentEmployee = (function () {
    function PermanentEmployee(name, id) {
        this.name = name;
        this.id = id;
        this.salary = 25000;
    }
    PermanentEmployee.prototype.doWork = function () {
        console.log("This is permanent employee and works 8 hours in a day.");
    };
    return PermanentEmployee;
}());
exports.PermanentEmployee = PermanentEmployee;
function createEmp(name, id) {
    var newEmp = new PermanentEmployee(name, id);
    console.log(newEmp.salary);
    newEmp.doWork();
}
exports.createEmp = createEmp;
function someFunc() {
    console.log("This function is not exported, so it is a private function");
}
