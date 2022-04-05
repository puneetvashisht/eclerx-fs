/*
let mobileInventory: Inventory<Mobile>;
let allMobiles: Mobile[] = mobileInventory.getItems();

let bookInventory: Inventory<Book>;
let allBooks: Mobile[] = mobileInventory.getItems();
*/
/*===============================*/
var Catalog = (function () {
    function Catalog() {
        this.catalogItems = new Array();
    }
    Catalog.prototype.addItem = function (item) {
        var num = this.catalogItems.push(item);
        if (num < 0) {
            return false;
        }
        return true;
    };
    Catalog.prototype.getItems = function () {
        return this.catalogItems;
    };
    ;
    return Catalog;
}());
var bookCatalog = new Catalog();
bookCatalog.addItem({ title: "New Book", id: 2147, author: "Someone" });
console.log("BookCatalog : ");
console.log(bookCatalog.getItems());
var mobileCatalog = new Catalog();
mobileCatalog.addItem({ name: "Future Mobile", id: 2147, manufactureDate: "14Sep2044" });
console.log("MobileCatalog : ");
console.log(mobileCatalog.getItems());
var numberCatalog = new Catalog();
numberCatalog.addItem(55);
console.log("NumberCatalog : ");
console.log(numberCatalog.getItems());
