/*added here*/
enum Category {Language, Science, History, Motivational};
/*added here*/

function getAllBooks(): Array<Object>{
    /*changed here*/
    let books = [
        {title: 'Tips of JavaScript', author:'Arun Kumar', isAvailable: false, category: Category.Language},
        {title: 'AngularJs with 10 projects', author:'Puneet Vashisht', isAvailable: true, category: Category.Language},
        {title: 'You can win', author:'Shiv Khera', isAvailable: true, category: Category.Motivational},
        {title: 'India is great', author:'Mahatma Gandhi', isAvailable: false, category: Category.History}
    ];
    return books;
}

function logFirstAvailableBook(books): void{
    let numberOfBooks: number = books.length;
    let firstAvailableBook: string = '';

    for(let currentBook in books){
//        console.log(books[currentBook]);
        if(books[currentBook].isAvailable){
            firstAvailableBook = books[currentBook].title;
            break;
        }
    }

    console.log("Total number of books : "+numberOfBooks);
    console.log("First available book : "+firstAvailableBook);
}

/*added here*/
function getBookTitlesByCategory(categoryFilter: Category): Array<string>{
    console.log("Getting books in category : "+Category[categoryFilter]);

    const allBooks = getAllBooks();
    const filteredTitles: string[] = [];//blank string array



    for(let currentBook of allBooks){
        if(currentBook['category'] === categoryFilter){
            filteredTitles.push(currentBook['title']);
        }
    }
    return filteredTitles;
}

function logBookTitles(titles: string[]): void{
    for(let title of titles){
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

const developerBooks : string[] = getBookTitlesByCategory(Category.Language);
logBookTitles(developerBooks);


