var SchoolLibrarian = (function () {
    function SchoolLibrarian() {
    }
    SchoolLibrarian.prototype.doWork = function (hours) {
        console.log(this.name + " works " + hours + " to help students in the library.");
    };
    return SchoolLibrarian;
}());
var kidsLibrarian = new SchoolLibrarian();
console.log(kidsLibrarian);
console.log(kidsLibrarian.doWork(5));
