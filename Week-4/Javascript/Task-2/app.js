
let books = [];

function addBookToLibrary(title, author, pages, genre) {
  books.push({ title, author, pages, genre });
  displayBooks(books);
}


document.getElementById('bookForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const genre = document.getElementById('genre').value;

  if (title && author && pages && genre) {
    addBookToLibrary(title, author, pages, genre);
    console.log('Book added:', { title, author, pages, genre });


    document.getElementById('bookForm').reset();
  } else {
    alert('Please fill in all fields.');
  }
});

document.getElementById('searchButton').addEventListener('click', function() {
  const searchTitle = document.getElementById('searchInput').value.toLowerCase();
  const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchTitle));
  displayBooks(filteredBooks);
});


function displayBooks(books) {
  const bookList = document.getElementById('bookList');
  bookList.innerHTML = '';

  books.forEach(book => {
    const bookItem = document.createElement('div');
    bookItem.classList.add('book-item');
    bookItem.innerHTML = `
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>Genre: ${book.genre}</p>
    `;
    bookList.appendChild(bookItem);
  });
}

displayBooks(books);
