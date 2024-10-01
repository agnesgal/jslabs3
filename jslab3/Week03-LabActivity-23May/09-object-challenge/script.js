const library = [
    { author: 'Charles Bukowski', title: 'Post Office', status: { own: true, reading: false, read: false } },
    { author: 'Anthony Burgess', title: 'Clockwork Orange', status: { own: true, reading: false, read: false } },
    { author: 'Bret Easton Ellis', title: 'American Psycho', status: { own: true, reading: false, read: false } }
];

library.forEach(book => { book.status.read = true; });
console.log(library);

const { title: firstBook } = library[0];
console.log(firstBook);

const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);
