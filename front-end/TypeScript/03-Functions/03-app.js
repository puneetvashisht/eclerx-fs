var Category;
(function (Category) {
    Category[Category["Language"] = 0] = "Language";
    Category[Category["Science"] = 1] = "Science";
    Category[Category["History"] = 2] = "History";
    Category[Category["Motivational"] = 3] = "Motivational";
})(Category || (Category = {}));
;
function getAllBooks() {
    // add a unique id to the book
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
/* added here */
function getBookById(id) {
    var allBooks = getAllBooks();
    return allBooks.filter(function (book) { return book['id'] === id; })[0];
}
/* added here */
var developerBooks = getBookTitlesByCategory(Category.Language);
//logging the books
developerBooks.forEach(function (currentValue, currentIndex, completeArra) { return console.log(++currentIndex + '. ' + currentValue); });
//book by id
var firstBook = getBookById(1);
console.log(firstBook);
