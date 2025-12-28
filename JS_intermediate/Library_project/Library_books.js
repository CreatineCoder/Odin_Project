const myLibrary = [];

function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  // take params, create a book then store it in the array
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

addBookToLibrary('The Great Gatsby', 'F. Scott Fitzgerald', 180, true);
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', 281, false);
addBookToLibrary('1984', 'George Orwell', 328, true);
addBookToLibrary('Pride and Prejudice', 'Jane Austen', 279, false);
addBookToLibrary('The Catcher in the Rye', 'J.D. Salinger', 214, true);

function displayBooks(book) {
  const libraryContainer = document.querySelector('.container');
  const NewBookCard = document.createElement('div');
  NewBookCard.classList.add('book-card');
  NewBookCard.innerHTML = `
      <h2 class="book-title">${book.title}</h2>
      <p class="book-author">by ${book.author}</p>
      <p class="book-pages">${book.pages} pages</p>
      <p class="book-read">${book.read ? 'Read' : 'Not Read Yet'}</p>
  `;
  libraryContainer.appendChild(NewBookCard);
}

for (let book of myLibrary) {
  displayBooks(book);
}

const addBookButton = document.querySelector('.add-book-button');

// Create the form element (hidden by default)
const formOverlay = document.createElement('div');
formOverlay.style.position = 'fixed';
formOverlay.style.top = 0;
formOverlay.style.left = 0;
formOverlay.style.width = '100vw';
formOverlay.style.height = '100vh';
formOverlay.style.background = 'rgba(0,0,0,0.4)';
formOverlay.style.display = 'flex';
formOverlay.style.alignItems = 'center';
formOverlay.style.justifyContent = 'center';
formOverlay.style.zIndex = 1000;
formOverlay.style.display = 'none';

const form = document.createElement('form');
form.style.background = '#fff';
form.style.padding = '32px 24px';
form.style.borderRadius = '10px';
form.style.boxShadow = '0 4px 16px rgba(0,0,0,0.2)';
form.style.display = 'flex';
form.style.flexDirection = 'column';
form.style.gap = '16px';
form.innerHTML = `
  <h2>Add a New Book</h2>
  <label>Title<input name="title" required></label>
  <label>Author<input name="author" required></label>
  <label>Pages<input name="pages" type="number" min="1" required></label>
  <label><input name="read" type="checkbox"> Read</label>
  <div style="display: flex; gap: 12px; justify-content: flex-end;">
    <button type="submit">Add Book</button>
    <button type="button" id="cancelForm">Cancel</button>
  </div>
`;
formOverlay.appendChild(form);
document.body.appendChild(formOverlay);

addBookButton.addEventListener('click', () => {
  formOverlay.style.display = 'flex';
});

document.getElementById('cancelForm')?.addEventListener('click', () => {
  formOverlay.style.display = 'none';
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const title = formData.get('title');
  const author = formData.get('author');
  const pages = Number(formData.get('pages'));
  const read = formData.get('read') === 'on';
  addBookToLibrary(title, author, pages, read);
  displayBooks(myLibrary[myLibrary.length - 1]);
  formOverlay.style.display = 'none';
  form.reset();
});

