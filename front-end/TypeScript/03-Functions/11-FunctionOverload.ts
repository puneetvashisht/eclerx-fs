
// function getTitles(author: string, name: string):string[]{
//     let foundTitles:string[] = [];
//     //get books by author name
//     return foundTitles;
// }
// function getTitles(isAvailable: boolean):string[]{
//     let foundTitles:string[] = [];
//     //get books by isAvailable property
//     return foundTitles;
// }

// */
function GetTitles(bookProperty: string): string[];
function GetTitles(bookProperty: boolean): string[];
function GetTitles(bookProperty: any):string[]{
    let foundTitles:string[] = [];
    if(typeof bookProperty === 'string'){
        //get books by author name
    }
    else if(typeof bookProperty === 'boolean'){
        //get books by isAvailable property
    }
    return foundTitles;
}

GetTitles(true);
GetTitles("rich")


/*
function GetTitles(bookProperty: any): string[] {
    const allBooks = GetAllBooks();
    const foundTitles: string[] = [];

    if(typeof bookProperty == 'string') {
        // get all books by a particular author
        for(let book of allBooks) {
            if(book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }

    else if(typeof bookProperty == 'boolean') {
        // get all books based on specified availability
        for(let book of allBooks) {
            if(book.available === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    return foundTitles;
}
*/


// class Person{
//     constructor(private name: string, private age: number){

//     }

//     getDetails(){
//         console.log(this.name + " : " +this.age);
        
//     }

//     getDetails(person: Person){
//         console.log(person.name + " : " +person.age);
        
//     }
// }
// let p = new Person("Priya", 23);
// console.log(p);
// console.log(p.getDetails());
