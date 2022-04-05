function getIssuedBooks(customerName) {
    var bookIds = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bookIds[_i - 1] = arguments[_i];
    }
    console.log("Customer name is " + customerName);
    console.log("List of issued bookIds " + bookIds);
}
var books = getIssuedBooks("Puneet", 4, 1, 452);
