var Student = (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    Student.schoolName = 'Best School';
    return Student;
}());
var student1 = new Student("Thomus", 16);
console.log(student1);
//console.log(student1.schoolName);//error in compilation
console.log(Student.schoolName);
var student2 = new Student("Carl", 12);
console.log(student2);
console.log(Student.schoolName);
Student.schoolName = "some other school";
var student3 = new Student("Ram", 15);
console.log(student3);
console.log(Student.schoolName);
