const myLibrary = [];

function Book() {
  // constructor
}

function addBookToLibrary() {
  // do stuff here
}


// Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.

function displayBook() {
  // loop through the array
  for (let i = 0; i < myLibrary.length; i++) {
    return myLibrary[i];  // myLibrary[i].name, & .pages
  }

  // display each book on the page
  
}

// manually adding 2 books to myLibrary
const book1 = {
  name: 'LOTR',
  pages: 100,
}

const book2 = {
  name: 'The Hobbit',
  pages: 50,
}

myLibrary.push(book1, book2);





