const myLibrary = [];


function Book(){
  
}

function Book(name, author, title, pagesTotal, isRead,id) {
  // the constructor...
  this.id = id;
  this.name = name;
  this.author = author;
  this.title = title;
  this.pagesTotal = pagesTotal; 
  this.isRead = isRead;
  
}

function addBookToLibrary(name, author, title, pagesTotal, isRead) {
  // take params, create a book then store it in the array
  const id = crypto.randomUUID();
  const myBook = new Book(name, author, title, pagesTotal, isRead,id);
  
  //push the new book to the array
  myLibrary.push(myBook);
  
}

//Write a function that loops through the array and displays each book on the page.
function display(){
  for ( let book of myLibrary ){
    console.log("The Properties of this Book are: " +"Name: " + book.name + " , Author: " + book.author + ", Title: " + book.title + ", Pages Number: " + book.pagesTotal + ", Book Read: " + book.isRead + ", Book ID:  " + book.id);
  }
}

function deleteLast(){
  myLibrary.pop();
}


addBookToLibrary("Tim","COOKAuthor","The Blue Sea", 560, true);

addBookToLibrary("Jones","TomCathor","The Blue Ocean", 560, true);

display();

