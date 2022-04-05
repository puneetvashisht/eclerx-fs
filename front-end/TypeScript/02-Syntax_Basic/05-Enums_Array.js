//enum
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["East"] = 1] = "East";
    Direction[Direction["West"] = 2] = "West";
    Direction[Direction["South"] = 3] = "South";
})(Direction || (Direction = {}));
;
var Day;
(function (Day) {
    Day[Day["Monday"] = 1] = "Monday";
    Day[Day["Tuesday"] = 2] = "Tuesday";
    Day[Day["Wednesday"] = 3] = "Wednesday";
    Day[Day["Thursday"] = 4] = "Thursday";
    Day[Day["Friday"] = 5] = "Friday";
    Day[Day["Saturday"] = 6] = "Saturday";
    Day[Day["Sunday"] = 7] = "Sunday";
})(Day || (Day = {}));
var Coin;
(function (Coin) {
    Coin[Coin["Head"] = 5] = "Head";
    Coin[Coin["Tail"] = 8] = "Tail";
})(Coin || (Coin = {}));
;
var today = Day.Tuesday;
console.log(today); //2
console.log(Day[today]); //Tuesday
//Array
var studentNames = ['Miley', 'Carl', 'Tom', 'Ram'];
var employeeNames = ['Thomus', 'Mohan', 'Mac', 'Tom'];
var anyArray = [422, "Red", false, { name: "arun", age: 30, address: 'delhi' }];
//Tuple
var myTuple = [[25, 'Ram'], [22, 'Carl'], [21, 'Mohan'], [19, 'Miley']];
var ages = [];
var names = [];
for (var _i = 0, myTuple_1 = myTuple; _i < myTuple_1.length; _i++) {
    var tuple = myTuple_1[_i];
    ages.push(tuple[0]);
    names.push(tuple[1]);
}
console.log("MyTuple is : " + myTuple);
console.log("Ages are : " + ages);
console.log("Names are : " + names);
