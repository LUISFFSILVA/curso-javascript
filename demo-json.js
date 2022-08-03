
const book1 = {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    isAvailable: true
}

// Json Stringify - transforma objeto em string
const bookToJson = JSON.stringify(book1);
console.log(bookToJson);
console.log(typeof bookToJson);

//JSON PARSE - transforma STRING em objeto
const jsonObj = '{"title":"Eloquent JavaScript","author":"Marijn Haverbeke","isAvailable":true}';
const book = JSON.parse(jsonObj);
console.log(book.title);
