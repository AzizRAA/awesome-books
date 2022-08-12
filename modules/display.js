import { saveMyLib } from './storage.js';

const bookContainer = document.querySelector('.books');

export const html = (title, author) => ` 
<div class="book-item">
    <p class="title"> "${title}" by ${author}</p> 
    <button class="remove">Remove</button>
</div>
`;

export const displayBook = (myLib) => {
    bookContainer.innerHTML = '';
    myLib.forEach((s) => {
      bookContainer.innerHTML += html(s.title, s.author);
    });


  const deleteButton = bookContainer.querySelectorAll('.remove');
  deleteButton.forEach((key, index) => key.addEventListener('click', () => {
   myLib.splice(index, 1);
    saveMyLib(myLib);
    displayBook(myLib);
  }));
};