interface Inventory<T>{
    getItems: () => T[];
    addItem: (newItem: T) => boolean;
}

interface CatalogItem {
    catalogNumber: number;
}

interface Mobile extends CatalogItem{
    name:string;
    manufactureDate: string;
}

interface Book extends CatalogItem{
    title:string;
    author:string;
}


class Catalog<T extends CatalogItem> implements Inventory<T> {
    private catalogItems = new Array<T>();
    addItem(item:T):boolean{
        let num = this.catalogItems.push(item);
        if(num<0){
            return false;
        }
        return true;
    }

    getItems(): T[] {
        return this.catalogItems;
    } ;
}


let bookCatalog = new Catalog<Book>();
bookCatalog.addItem({title:"New Book", catalogNumber: 2147, author: "Someone"});
console.log("BookCatalog : ");
console.log(bookCatalog.getItems());

let mobileCatalog = new Catalog<Mobile>();
mobileCatalog.addItem({name:"Future Mobile", catalogNumber: 2147, manufactureDate: "14Sep2044"});
console.log("MobileCatalog : ");
console.log(mobileCatalog.getItems());

//compilation error
/*let numberCatalog = new Catalog<number>();
numberCatalog.addItem(55);
console.log("NumberCatalog : ");
console.log(numberCatalog.getItems());*/

