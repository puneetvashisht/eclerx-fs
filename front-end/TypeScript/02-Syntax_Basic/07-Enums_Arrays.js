/*added here*/
var Category;
(function (Category) {
    Category[Category["Language"] = 0] = "Language";
    Category[Category["Science"] = 1] = "Science";
    Category[Category["History"] = 2] = "History";
    Category[Category["Motivational"] = 3] = "Motivational";
})(Category || (Category = {}));
;
/*added here*/
function getAllBooks() {
    /*changed here*/
    var books = [
        { title: 'Tips of JavaScript', author: 'Arun Kumar', isAvailable: false, category: Category.Language },
        { title: 'AngularJs with 10 projects', author: 'Puneet Vashisht', isAvailable: true, category: Category.Language },
        { title: 'You can win', author: 'Shiv Khera', isAvailable: true, category: Category.Motivational },
        { title: 'India is great', author: 'Mahatma Gandhi', isAvailable: false, category: Category.History }
    ];
    return books;
}
function logFirstAvailableBook(books) {
    var numberOfBooks = books.length;
    var firstAvailableBook = '';
    for (var currentBook in books) {
        //        console.log(books[currentBook]);
        if (books[currentBook].isAvailable) {
            firstAvailableBook = books[currentBook].title;
            break;
        }
    }
    console.log("Total number of books : " + numberOfBooks);
    console.log("First available book : " + firstAvailableBook);
}
/*added here*/
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
function logBookTitles(titles) {
    for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
        var title = titles_1[_i];
        console.log(title);
    }
}
/*added here*/
/* remove it */
/*const books = getAllBooks();
let newBook = {title: 'Humans', author:'Dr. Carl', isAvailable: true, category: Category.Science};
books.push(newBook);

logFirstAvailableBook(books);*/
/* remove it */
var developerBooks = getBookTitlesByCategory(Category.Language);
logBookTitles(developerBooks);
