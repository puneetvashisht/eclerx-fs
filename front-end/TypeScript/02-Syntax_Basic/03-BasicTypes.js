//    function getAverageMarks(): number{
function getAverageMarks(marksArray) {
    var totalMarks = 0;
    for (var i in marksArray) {
        totalMarks += marksArray[i];
    }
    return totalMarks / marksArray.length;
}
function showDetails() {
    var isMale = true;
    var age = 12;
    var name = "Lilley";
    var marks = [65, 75, 80, 74, 69];
    console.log("My name is : " + name);
    console.log("My age is : " + age);
    console.log("My average marks : " + getAverageMarks(marks));
    if (isMale) {
        console.log("My gender is male");
    }
    else {
        console.log("My gender is female");
    }
}
showDetails();
