const myLibrary = [];

function Book(title, author, pages, read, uniqueID) {
  // constructor
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.uniqueID = uniqueID;
}

let uniqueID = 1;
function addBookToLibrary(item) {
  // do stuff here
  myLibrary.push(item);
}

// Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.

// function displayBook() {
//   // loop through the array
//   // display each book on the page
//   for (let i = 0; i < myLibrary.length; i++) {
//     console.log("Title:" + myLibrary[i].title);  
//     console.log("Author:" + myLibrary[i].author);  
//     console.log("Pages:" + myLibrary[i].pages);  
//     console.log(myLibrary[i].read ? 'yes' : 'no');  
//     // myLibrary[i].name, & .pages
//   }  
// }

      // manually adding 2 books to myLibrary
      // const book1 = {
      //   name: 'LOTR',
      //   pages: 100,
      // }

      // const book2 = {
      //   name: 'The Hobbit',
      //   pages: 50,
      // }

      // myLibrary.push(book1, book2);

// Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book:

  // select add-book button
  const addBook = document.getElementById("add-book");

  // add event to display dialog on 'addBook'
  addBook.addEventListener("click", (event) => {
    event.preventDefault();
    selectDialog.showModal();
  })

  // select dialog
  const selectDialog = document.getElementById("dialog");


//  author, title, number of pages, whether it’s been read and anything else you might want. 


// How you decide to display this form is up to you. For example, you may wish to have a form show in a sidebar or you may wish to explore dialogs and modals using the <dialog> tag. 


// However you do this, you will most likely encounter an issue where submitting your form will not do what you expect it to do. That’s because the submit input tries to send the data to a server by default. If you’ve done the bonus section for the calculator assignment, you might be familiar with event.preventDefault();. Read up on the event.preventDefault documentation again and see how you can solve this issue!
  // select add button
  const addBtn = document.getElementById("add");

  // add event to addBtn
  addBtn.addEventListener("click", (event) => {
    event.preventDefault();
    ++uniqueID;
    let title = document.getElementById("title").value,
        author = document.getElementById("author").value,
        pages = document.getElementById("pages").value,
        read = document.getElementById("read").checked;
    const newBook = new Book(title, author, pages, read, uniqueID);
    addBookToLibrary(newBook);
    selectDialog.close();
  });


// -------------------------------------------------------------------------

  // // display book on the 'book-shelf'
  //   // create no. of divs according to items on shelf
  //       // create a single div
  //       let bookSpace = document.createElement('div');

  //   // for each item make a div container with class book-shelf-item 
  //       bookSpace.classList.add('shelf-item');

  //   // containing title, author, pages, read
  //     // get title
  //     let testText = document.createTextNode(`${myLibrary[0].title}`);
  //     bookSpace.appendChild(testText);
  //     // here we'll loop over title, author, pages, read etc.
  //       function displayBook() {
  //         // loop through the array
  //         // display each book on the page
  //         for (let i = 0; i < myLibrary.length; i++) {
  //           for (const key in myLibrary[i]) {
              
  //             let textAddition = document.createTextNode(`${myLibrary[i][j]}`)

  //           }

  //           (myLibrary[i][j] == true) ? 'yes' : 'no'
  //           console.log(myLibrary[i].read ? 'yes' : 'no');  
  //         }  
  //       }

// -------------------------------------------------------------------------

    // create no. of divs according to items on shelf
        // create a single div
        let bookSpace;
        const bookShelf = document.getElementById('book-shelf');

        function displayAllBooks() {
          // first we'll delete all existing books
          let shelfItems = document.getElementsByClassName("book-item");
          let shelfItemsLength = shelfItems.length;
          for (let i = 0; i < shelfItemsLength; i++) {
            while (shelfItems[i]) {
              shelfItems[i].remove();
            }
          }
          // now we populate shelf anew with the existing items
          for (let i = 0; i < myLibrary.length; i++) {
            bookSpace = document.createElement('div');
            // bookSpace.setAttribute("id", "something");
            bookShelf.appendChild(bookSpace);
            // bookSpace.appendChild(displayBook(mylibrary[i]));
            displayBook(myLibrary[i], bookSpace);
          }
        }

        addBtn.addEventListener("click", displayAllBooks);

    // for each item make a div container with class book-shelf-item 
        // bookSpace.classList.add('shelf-item');
    // but now i want to add ID instead of class, bcoz class returns Nodelist

        // defining displayBook() for only a single instance 'Book'
        function displayBook(book, bookSpace) {
          bookSpace.id = book.uniqueID;
          bookSpace.classList.add("book-item");
          let textAddition;
          for (const key in book) {
            if(key == 'read') {
              textAddition = document.createTextNode(`${book[key] ? 'Read' : 'Not read'}`);
              let readStatusButton = document.createElement('button');
              // let para = document.createElement('p');
              // para.appendChild(textAddition);
              readStatusButton.appendChild(textAddition);
              // bookSpace.appendChild(para);

              // add id to readStatusButton
              // readStatusButton.id = textAddition.textContent;
              readStatusButton.id = 'read-button';
              readStatusButton.addEventListener("click", () => {
                if (book.read == 'Read') {
                      book.read = 'Not Read';
                    } else {
                      book.read = 'Read';
                    }
                    readStatusButton.innerText = book.read;
              });

              bookSpace.appendChild(readStatusButton);
              let createGap = document.createElement('br');
              bookSpace.appendChild(createGap);

              // add event on readStatusButton to change its innerText to Not Read
              console.log(readStatusButton.id);
              // let button1 = 
              // readStatusButton = document.getElementById('readStatusButton.id');
              // readStatusButton.addEventListener("click", () => {
              //   if (readStatusButton.innerText === 'Not read') {
              //     readStatusButton.innerText === 'Read';
              //   } else {
              //     readStatusButton.innerText === 'Not read';
              //   }
              // });

            } else if (key == 'uniqueID') {
              // do nothing
            } else if (book[key] == '') {
              // do nothing
            }
            else {
              textAddition = document.createTextNode(`${key.toUpperCase()}: "${book[key]}"`)
              let para = document.createElement('p');
              para.appendChild(textAddition);
              bookSpace.appendChild(para);
            }
          }
          let deleteButton = document.createElement('button');
          textAddition = document.createTextNode("Delete");
          deleteButton.appendChild(textAddition);
          bookSpace.appendChild(deleteButton);
          // pass on the reference to the book i.e. 'book' to the event
          deleteButton.addEventListener("click", () => {
            // get id of parent node i.e. book-item
            // console.log(e.target.parentNode.id);
            deleteBook(book.uniqueID);
          });

          // let readButton = document.getElementById('read-button');
          // readButton.addEventListener("click", () => {
          //   if (book.read == 'Read') {
          //     book.read = 'Not Read';
          //   } else {
          //     book.read = 'Read';
          //   }
          //   readButton.innerText = book.read;
          // })
        }

// Entire myLibrary repopulated on shelf whenever a book added - fix it ! - done

// Toggle read button; change background color & button text when clicked
// select read button

// define function for delete button:
  // 1. remove the selected book
  // 2. run displayBook() function

function deleteBook (bookID) {
  // delete this book
  let currentBook = document.getElementById(bookID);
  // run displayBook()
  currentBook.remove();
  // i have uniqueID reference, need to find list index with this value & delete it
  // loop over all items of myLibrary
  // delete item which has id equal to bookID
  for (let i = 0; i < myLibrary.length; i++) {
    // console.log(myLibrary[i].uniqueID);
    // console.log(bookID);
    // get the index No
    if (myLibrary[i].uniqueID == bookID) {
      console.log(`myLibrary[i].uniqueID: ${myLibrary[i].uniqueID} & bookID: ${bookID}`);
      // console.log(myLibrary[i].indexOf(bookID));
      console.log(myLibrary.indexOf(myLibrary[i]));
      myLibrary.splice(myLibrary.indexOf(myLibrary[i]),1);
    }
      // myLibrary.forEach((element) => {
      //   console.log(element.uniqueID);
      // });
    }
}

// Key learnings:
    // when button created then addEventListener to it before adding button to DOM
    // set element id by element.id = XXXXXX
    // element.setAttribute("class", "text-book")