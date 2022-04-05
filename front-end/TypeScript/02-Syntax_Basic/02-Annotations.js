// without annotations
var myName = "Puneet Vashisht";
//myName = 55;// compilation error
function getRandomNumber() {
    return Math.floor(Math.random() * 1000);
}
// myName = getRandomNumber();// compilation error
//with type annotations
var myAddress = "Delhi, India";
//myAddress = 45;// compilation error
function generateRandomNumber() {
    return Math.floor(Math.random() * 1000);
}
// myAddress = generateRandomNumber();// compilation error 
