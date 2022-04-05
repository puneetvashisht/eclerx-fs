function getAllBooks() {
    var books = [
        { title: 'Tips of JavaScript', author: 'Arun Kumar', isAvailable: false },
        { title: 'AngularJs with 10 projects', author: 'Puneet Vashisht', isAvailable: true },
        { title: 'You can win', author: 'Shiv Khera', isAvailable: true },
        { title: 'India is great', author: 'Mahatma Gandhi', isAvailable: false }
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
var books = getAllBooks();
var newBook = { title: 'Humans', author: 'Dr. Carl', isAvailable: true };
books.push(newBook);
logFirstAvailableBook(books);
