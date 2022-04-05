var SchoolLibrarian = (function () {
    function SchoolLibrarian(name, email, section) {
        this.name = name;
        this.email = email;
        this.section = section;
        // look at the compiled javascript, following code is automatically added
        // this.name = name
        // this.email = email
        // this.section = section
    }
    SchoolLibrarian.prototype.doWork = function (hours) {
        console.log(this.name + " works " + hours + " to help students in the library.");
    };
    return SchoolLibrarian;
}());
var someLibrarian = new SchoolLibrarian("Carl", "Carl@someschool.com", "sineor");
console.log(someLibrarian);
console.log(someLibrarian.doWork(5));
