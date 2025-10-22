const myLibrary = [];




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
  /*or ( let book of myLibrary ){
    console.log("The Properties of this Book are: " +"Name: " + book.name + " , Author: " + book.author + ", Title: " + book.title + ", Pages Number: " + book.pagesTotal + ", Book Read: " + book.isRead + ", Book ID:  " + book.id);
  }*/


  //first target the container from html and then clear
const libraryContainer =  document.getElementById("library");
libraryContainer.innerHTML = "";

//Then loop through all books and save to a div element and at last append to the library 
  for(let books of myLibrary){
    const element = document.createElement("div");
    element.classList.add("book-card");
    element.textContent =  `Name: ${books.name}, Author: ${books.author}, Title: ${books.title}, Pages: ${books.pagesTotal}, Read: ${books.isRead}, ID: ${books.id}`;
    libraryContainer.appendChild(element);
  }


}

// same event listener function liike java
const form = document.getElementById("bookform");

form.addEventListener("submit", function(event){

  event.preventDefault();


  const name = document.getElementById("name").value;
  const author = document.getElementById("author").value;
   const title = document.getElementById("title").value;
   const pagesTotal = document.getElementById("pages").value;
   //By Radio button which is checked gives you the value, with querySelector
    const isRead = document.querySelector('input[name="isRead"]:checked').value

  // add to library
addBookToLibrary(name, author, title, pagesTotal, isRead);

display();

form.reset();

});


function deleteLast(){
myLibrary.pop();
display();
}
  



/*addBookToLibrary("Tim","COOKAuthor","The Blue Sea", 560, true);

addBookToLibrary("Jones","TomCathor","The Blue Ocean", 560, true);

display();*/

