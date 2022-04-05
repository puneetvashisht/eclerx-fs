var Person = (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "nameAccessor", {
        // getter & setter are allowed in es5 or higher
        // getter must have retrun type
        get: function () {
            return this.name;
        },
        // setter must have only one parameter and no return type
        set: function (name) {
            this.name = name;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var ramesh = new Person();
console.log(ramesh.nameAccessor);
ramesh.nameAccessor = "Ramesh";
console.log(ramesh.nameAccessor);
