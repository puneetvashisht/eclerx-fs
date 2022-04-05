var Category;
(function (Category) {
    Category[Category["Language"] = 0] = "Language";
    Category[Category["Science"] = 1] = "Science";
    Category[Category["History"] = 2] = "History";
    Category[Category["Motivational"] = 3] = "Motivational";
})(Category || (Category = {}));
;
function getAllBooks() {
    var books = [
        { id: 1, title: 'Tips of JavaScript', author: 'Arun Kumar', isAvailable: false, category: Category.Language },
        { id: 2, title: 'AngularJs with 10 projects', author: 'Puneet Vashisht', isAvailable: true, category: Category.Language },
        { id: 3, title: 'You can win', author: 'Shiv Khera', isAvailable: true, category: Category.Motivational },
        { id: 4, title: 'India is great', author: 'Mahatma Gandhi', isAvailable: false, category: Category.History }
    ];
    return books;
}
function logFirstAvailableBook(books) {
    var numberOfBooks = books.length;
    var firstAvailableBook = '';
    for (var currentBook in books) {
        if (books[currentBook].isAvailable) {
            firstAvailableBook = books[currentBook].title;
            break;
        }
    }
    console.log("Total number of books : " + numberOfBooks);
    console.log("First available book : " + firstAvailableBook);
}
function getBookTitlesByCategory(categoryFilter) {
    if (categoryFilter === void 0) { categoryFilter = Category.Language; }
    console.log("Getting books in category : " + Category[categoryFilter]);
    var allBooks = getAllBooks();
    var filteredTitles = []; //blank string array
    for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
        var currentBook = allBooks_1[_i];
        if (currentBook['category'] === categoryFilter) {
            filteredTitles.push(currentBook['title']);
        }
    }
    return filteredTitles;
}
function getBookById(id) {
    var allBooks = getAllBooks();
    return allBooks.filter(function (book) { return book['id'] === id; })[0];
}
function createCustomer(name, age, city) {
    console.log("Creating customer : " + name);
    if (age) {
        console.log("Assigning age to the customer : " + age);
    }
    if (city) {
        console.log("Assigning city to the customer : " + city);
    }
}
/*added here*/
var languageBooks = getBookTitlesByCategory(); //language category is default category
languageBooks.forEach(function (title) { return console.log(title); });
var scienceBooks = getBookTitlesByCategory(Category.Science); //language category is default category
scienceBooks.forEach(function (title) { return console.log(title); });
/*added here*/
/*
createCustomer("Vinod");
createCustomer("Carl", 35);
//createCustomer("Thomus", "Tokyo");//compilation error, first it should be a number
createCustomer("Thomus", 28, "Tokyo");
*/
/*
 let IdGenerator : (someString: string, someNumber: number) => string;//IdGenerator can store a function this particular syntax only
 IdGenerator = (name: string, id:number) => {return name+id;}


 let myId = IdGenerator("Arun",2786);
 console.log("Customer Id: "+myId);

 */
/*
 const developerBooks : string[] = getBookTitlesByCategory(Category.Language);
 developerBooks.forEach((currentValue, currentIndex, completeArra) => console.log(++currentIndex + '. '+currentValue));

 //book by id
 let firstBook = getBookById(1);
 console.log(firstBook);
 */
