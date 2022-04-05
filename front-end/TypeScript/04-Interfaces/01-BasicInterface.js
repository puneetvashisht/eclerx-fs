/*
    A Person should speak.
    A Person should eat.
    A Person should sleep.
    A Person should work.
*/
var person = {
    speak: function () { return "I am speaking"; },
    eat: function (food) { return "I am eating " + food; },
    sleep: function () { return "I am sleeping."; },
    work: function (companyName) { return "I work in " + companyName; }
};
console.log(person.speak());
console.log(person.eat("Burger"));
console.log(person.sleep());
console.log(person.work("Google"));
