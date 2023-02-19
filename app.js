const library = require("./lab_1/library.json")
const booksName = library.map(book => book.name)
console.log(`The books names are :${booksName}`);
const booksAvailable = library.map( book=> book.borrowed ? book.name : null);
console.log(`The available books names are :${booksAvailable}`);