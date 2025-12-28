function books(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read ? 'read' : 'not read yet'}`;
    }
}

const book1 = new books('The Hobbit', 'J.R.R. Tolkien', 310, true);
console.log(book1.info()); // Output: The Hobbit by J.R.R. Tolkien, 310 pages, read

const book2 = new books('1984', 'George Orwell', 328, false);
console.log(book2.info()); // Output: 1984 by George Orwell, 328 pages, not read yet

Object.prototype.describe = function() { // Adding a method to Object prototype
    return `This is an object of type ${this.constructor.name}`;
}
console.log(book1.describe()); // Output: This is an object of type books