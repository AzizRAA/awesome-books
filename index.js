import { saveMyLib, getMyLib } from './modules/storage.js';
import luxon from './modules/date.js';
import { displayBook } from './modules/display.js';
import navbar from './modules/navbar.js';

const addBtn = document.querySelector('.add');
const inTitle = document.querySelector('#in-title');
const inAuthor = document.querySelector('#in-author');
const bookContainer = document.querySelector('.books');
const myLib = [...getMyLib()];
export default myLib;

class Book {
  constructor(title = '', author = '') {
    this.title = title;
    this.author = author;
  }

  saveBook() {
    const savedBook = {
      title: this.title,
      author: this.author,
    };

    myLib.unshift(savedBook);
    displayBook(myLib);
  }
}

const addBook = (e) => {
  e.preventDefault();
  const bookTitle = inTitle.value;
  const bookAuthor = inAuthor.value;
  if (inTitle.value !== '' && inAuthor.value !== '') {
    bookContainer.innerHTML = '';
    const insertBook = new Book(bookTitle, bookAuthor);
    insertBook.saveBook();
    inAuthor.value = '';
    inTitle.value = '';
    saveMyLib(myLib);
  }
};
luxon();
navbar();
document.addEventListener('DOMContentLoaded', displayBook(myLib));
addBtn.addEventListener('click', addBook);