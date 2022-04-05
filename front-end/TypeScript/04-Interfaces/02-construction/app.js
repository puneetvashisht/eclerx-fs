"use strict";
var enums_1 = require('./enums');
function getAllBooks() {
    var books = [
        { id: 1, title: 'Tips of JavaScript', author: 'Arun Kumar', isAvailable: false, category: enums_1.Category.Language },
        { id: 2, title: 'AngularJs with 10 projects', author: 'Puneet Vashisht', isAvailable: true, category: enums_1.Category.Language },
        { id: 3, title: 'You can win', author: 'Shiv Khera', isAvailable: true, category: enums_1.Category.Motivational },
        { id: 4, title: 'India is great', author: 'Mahatma Gandhi', isAvailable: false, category: enums_1.Category.History }
    ];
    return books;
}
function getBookById(id) {
    var allBooks = getAllBooks();
    return allBooks.filter(function (book) { return book['id'] === id; })[0];
}
function printBook(book) {
    //because book is Book type so IDE will help you with code completion now
    console.log(book.title + ' by ' + book.author);
}
var myBook = {
    id: 8,
    author: 'Jane Austin',
    title: 'Health is Money',
    isAvailable: true,
    category: enums_1.Category.Science,
    year: 2004,
    copies: 4
};
printBook(myBook);
