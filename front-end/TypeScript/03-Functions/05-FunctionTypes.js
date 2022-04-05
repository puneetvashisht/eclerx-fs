//variable my be declared with function type
function publicationMessage(year) {
    return 'Date published: ' + year;
}
//combination of paramter types and return type
var publishFunc;
//function assigned must have the same signature as the variable type
publishFunc = publicationMessage;
var publishDate = publishFunc(2015);
