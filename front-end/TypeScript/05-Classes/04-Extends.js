var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//This is a person class
var Person = (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + lastName;
    }
    return Person;
}());
// This is an Employee class that extends Person class
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(firstName, lastName, id, department) {
        _super.call(this, firstName, lastName);
        this.id = id;
        this.department = department;
    }
    Employee.prototype.showDetails = function () {
        console.log("Employee name is : " + this.fullName);
        // console.log("Employee name is : " + super.fullName);//undefiend
        console.log("Employee id number is : " + this.id);
        console.log("Department employee works is : " + this.department);
    };
    return Employee;
}(Person));
var emp = new Employee("Arun", "Kumar", 214, "IT");
emp.showDetails();
