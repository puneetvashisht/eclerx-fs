function showDetails(firstName, lastName, age) {
    var details = 'Your fullname is ' + firstName + ' ' + lastName + '\n';
    details = details + 'Your age is ' + age + '\n';
    return details;
}
console.log(showDetails('Puneet', 'Vashisht', 34));
//console.log(showDetails('Puneet','Vashisht',true));// compilation error 
