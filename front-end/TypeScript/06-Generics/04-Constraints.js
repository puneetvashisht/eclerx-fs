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
bookCatalog.addItem({ title: "New Book", catalogNumber: 2147, author: "Someone" });
console.log("BookCatalog : ");
console.log(bookCatalog.getItems());
var mobileCatalog = new Catalog();
mobileCatalog.addItem({ name: "Future Mobile", catalogNumber: 2147, manufactureDate: "14Sep2044" });
console.log("MobileCatalog : ");
console.log(mobileCatalog.getItems());
//compilation error
/*let numberCatalog = new Catalog<number>();
numberCatalog.addItem(55);
console.log("NumberCatalog : ");
console.log(numberCatalog.getItems());*/
