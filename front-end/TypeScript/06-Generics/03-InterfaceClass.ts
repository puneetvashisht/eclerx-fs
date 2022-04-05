interface Inventory<T>{
    getItems: () => T[];
    addItem: (newItem: T) => boolean;
}

interface Mobile{
    name:string;
    id:number;
    manufactureDate: string;
}

interface Book{
    title:string;
    id:number;
    author:string;
}

/*
let mobileInventory: Inventory<Mobile>;
let allMobiles: Mobile[] = mobileInventory.getItems();

let bookInventory: Inventory<Book>;
let allBooks: Mobile[] = mobileInventory.getItems();
*/


/*===============================*/


class Catalog<T> implements Inventory<T> {
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
bookCatalog.addItem({title:"New Book", id: 2147, author: "Someone"});
console.log("BookCatalog : ");
console.log(bookCatalog.getItems());

let mobileCatalog = new Catalog<Mobile>();
mobileCatalog.addItem({name:"Future Mobile", id: 2147, manufactureDate: "14Sep2044"});
console.log("MobileCatalog : ");
console.log(mobileCatalog.getItems());

let numberCatalog = new Catalog<number>();
numberCatalog.addItem(55);
console.log("NumberCatalog : ");
console.log(numberCatalog.getItems());

