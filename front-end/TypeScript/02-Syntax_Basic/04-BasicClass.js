var Student = (function () {
    function Student() {
        this.isMale = true;
        this.age = 12;
        this.name = "Lilley";
        this.marks = [65, 75, 80, 74, 69];
    }
    //    private getAverageMarks(): number{
    Student.prototype.getAverageMarks = function (marksArray) {
        var totalMarks = 0;
        for (var i in marksArray) {
            totalMarks += marksArray[i];
        }
        return totalMarks / marksArray.length;
    };
    Student.prototype.showDetails = function () {
        console.log("My name is : " + this.name);
        console.log("My age is : " + this.age);
        console.log("My average marks : " + this.getAverageMarks(this.marks));
        if (this.isMale) {
            console.log("My gender is male");
        }
        else {
            console.log("My gender is female");
        }
    };
    return Student;
}());
var std = new Student();
std.showDetails();
