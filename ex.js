/* eslint-disable no-console */
const BOOK_API = 'https://some.url/api';

function fakeAjax(url, cb) {
  setTimeout(function fakeLoadingDelay() {
    cb([
      'A Song of Ice and Fire',
      'The Great Gatsby',
      'Crime & Punishment',
      'Great Expectations',
      "You Don't Know JS",
      'Sapiens',
      'Homo Deus',
      '21 Lessons for the 21st Century',
      'The Motivation Manifesto',
    ]);
  }, 500);
}

class Bookshelf {
  constructor() {
    this.favoriteBooks = [];
  }

  addFavoriteBook(bookName) {
    if (!bookName.includes('Great')) {
      this.favoriteBooks.push(bookName);
    }
  }

  printFavoriteBooks() {
    console.log(`
Favorite Books: ${String(this.favoriteBooks.length)}
======================================`);
    for (const bookName of this.favoriteBooks) {
      console.log(bookName);
    }
  }
}

function loadBooks(bookshelf) {
  fakeAjax(BOOK_API, function callBack(bookNames) {
    for (const bookName of bookNames) {
      bookshelf.addFavoriteBook(bookName);
    }
    bookshelf.printFavoriteBooks();
  });
}

const library = new Bookshelf();
loadBooks(library);
