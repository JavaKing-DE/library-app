
//Our Storage or DB
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


//adding function in Prototype to switch status
Book.prototype.toggleRead = function(){
  this.isRead = this.isRead == "Yes" ? "No" : "Yes";
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
    element.innerHTML =  `
    <p><strong>Name of Book:</strong> ${books.name}</p>
    <p><strong>Author:</strong> ${books.author}</p> 
    <p><strong>Title or Subtitle:</strong>  ${books.title}</p>
     <p><strong>Pages: </strong> ${books.pagesTotal}</p>
     <p><strong>Read:</strong> ${books.isRead}</p>
     <button class="delete-btn" id="${books.id}">Delete</button>
     <button class="readStatus" id="${books.id}">Change Read Status</button>

     `;
  libraryContainer.appendChild(element);
}

//event lister for delete
const deleteButtons = document.getElementsByClassName("delete-btn")

//loop through all delete buttons to add a event listener to each button
for( let i = 0 ; i < deleteButtons.length ; i++){

  deleteButtons[i].addEventListener("click", function(event){
    const bookId = event.target.id;

    //call delete function and pass the particular bookId
    deleteBook(bookId);
  });
}



//Event listner for Status
const readStatusToggle = document.getElementsByClassName("readStatus")

//loop through change status buttons to add a event listener to each button
for( let i = 0 ; i < readStatusToggle.length ; i++){

  readStatusToggle[i].addEventListener("click", function(event){
    const bookId = event.target.id;

    //call readTOggle function
    toggleReadStatus(bookId);
  });
}
     }






function deleteBook(bookId){

  // Find the index of the book in our array 

  for ( let i = 0 ; i <= myLibrary.length ; i++){

    if(myLibrary[i].id === bookId) {
        //remove 1 element  at postion i 
        myLibrary.splice(i , 1);
        break;
    }
  }

  display();
}


function toggleReadStatus(bookId){
for(let i = 0 ; i < myLibrary.length ; i++ ){
  if(myLibrary[i].id == bookId){
    myLibrary[i].toggleRead(); // calls prototype function
    break;
  }
}

display(); // re-render
}









/*addBookToLibrary("Tim","COOKAuthor","The Blue Sea", 560, true);

addBookToLibrary("Jones","TomCathor","The Blue Ocean", 560, true);

display();*/

