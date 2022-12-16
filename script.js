// get references
const form = document.getElementById('my-form');
const list = document.getElementById('bookshelf');
const openFormButton = document.getElementById('open-form-btn')

let formOpened = true;

// toggle input form visibility
function openForm() {
    if (formOpened) {
        form.style.display = 'none'
        openFormButton.innerText = 'Open Form'
        formOpened = false;
    } else if (!formOpened) {
        form.style.display = 'block'
        openFormButton.innerText = 'Close Form'
        formOpened = true;
    }
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// handle form submission
form.addEventListener('submit', (event) => {
  // prevent the default form submission behavior
  event.preventDefault();

  //gGet the book info
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const pages = document.getElementById('pages');
  const read = document.querySelector('input[name="read"]:checked');

  //make book object
  const newBook = new Book(title.value, author.value, pages.value, read.value)

  //cCreate elements for book info
  const inputsDiv = document.createElement('div');
  inputsDiv.classList.add('book-info-div')
  const titleItem = document.createElement('p');
  titleItem.innerText = `Title: ${title.value}`;
  const authorItem = document.createElement('p');
  authorItem.innerText = `Author: ${author.value}`;
  const pagesItem = document.createElement('p');
  pagesItem.innerText = `Pages: ${pages.value}`;
  const readItem = document.createElement('p');
  readItem.innerText = `Read or not: ${read.value}`;

  // add delete button to the book
  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.classList.add('delete-button');
  deleteButton.addEventListener('click', () => {
    list.removeChild(inputsDiv);
  });
  inputsDiv.appendChild(deleteButton);

  // add toggle read button to the book
  const toggleReadButton = document.createElement('button');
  if (read.value == 'yes') {
    toggleReadButton.innerText = 'Read';
  } else if (read.value == 'no') {
    toggleReadButton.innerText = 'Not Read';
  }
  toggleReadButton.classList.add('toggle-read-button');
  toggleReadButton.addEventListener('click', () => {
    if (toggleReadButton.innerTextt == 'Read') {
      toggleReadButton.innerText = 'Not Read';
    } else if (toggleReadButton.innerText == 'Not Read') {
      toggleReadButton.innerText = 'Read';
    }
  })
  inputsDiv.appendChild(toggleReadButton);

  // append elements to book
  inputsDiv.appendChild(titleItem);
  inputsDiv.appendChild(authorItem);
  inputsDiv.appendChild(pagesItem);
  inputsDiv.appendChild(readItem);
  list.appendChild(inputsDiv);

  // clear the inputs
  title.value = '';
  author.value = '';
  pages.value = '';
  read.value = '';
});
