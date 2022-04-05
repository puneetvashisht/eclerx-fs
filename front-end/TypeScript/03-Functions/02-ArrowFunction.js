var filteredBooksByAuthor = allBooks.filter(function (book) {
    return book['author'] === 'Puneet Vahsisht';
});
var filteredBooksByCategory = allBooks.filter(function (book) { return book['category'] === Category.Language; });
allBooks.forEach(function () { return console.log('Done reading!'); });
allBooks.forEach(function (title) { return console.log(title); });
allBooks.forEach(function (title, author) { return console.log(title + ' by ' + author); });
allBooks.forEach(function (title, author) {
    console.log(title + ' by ' + author);
    //more stuff
});
