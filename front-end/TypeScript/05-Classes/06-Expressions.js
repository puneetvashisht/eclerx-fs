var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + lastName;
    }
    return Person;
}());
//the way to create a class
var Employee = (function (_super) {
    __extends(class_1, _super);
    function class_1(firstName, lastName, id, department) {
        _super.call(this, firstName, lastName);
        this.id = id;
        this.department = department;
    }
    class_1.prototype.showDetails = function () {
        console.log("Employee name is : ${this.fullName}"); // string
        console.log("Employee name is : " + this.fullName);
        console.log("Employee id number is : " + this.id);
        console.log("Department employee works is : " + this.department);
    };
    return class_1;
}(Person));
var emp = new Employee("Arun", "Kumar", 214, "IT");
emp.showDetails();
