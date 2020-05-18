
let myLibrary = [];
let bookTitle;
let books = document.querySelectorAll(".books");
let mainAddButton = document.getElementById("mainAddButton");
let deleteButton = document.querySelectorAll(".deleteBook");
let editBookStatusButton = document.querySelectorAll(".editBookStatus");
let defaultBookStatus = document.querySelectorAll(".book-Status");
const booksContainer = document.querySelector("#books-container");
const bookForm = document.querySelector(".bookFormContainer");
const cancelButton = document.getElementById("cancelButton");
const addButton = document.getElementById("addButton");
const inputs = document.querySelectorAll("input");

const bookStatus = document.getElementById("newBookStatus");

function Book(title, author, pages, readed){
    this.readed = readed;
    this.author = author;
    this.title = title;
    this.pages = pages;
    
}

function checkStatusAndChangeColor(){
    for (let i = 0; i < defaultBookStatus.length; i++) {
        console.log(defaultBookStatus[i].textContent);
        if (defaultBookStatus[i].textContent == "Not readed."){
            defaultBookStatus[i].style.color = "#f85151";   
        }else{
            defaultBookStatus[i].style.color = "#33c55f";
        }
    }
}

function addEventListenerToDeleteButtons(){
    for (let i = 0; i < deleteButton.length; i++) {
        deleteButton = document.querySelectorAll(".deleteBook");
        deleteButton[i].addEventListener("click", deleteBook);
    }
}

function addEventListenerToEditStatusButtons(){
    for (let i = 0; i < editBookStatusButton.length; i++) {
        editBookStatusButton = document.querySelectorAll(".editBookStatus");
        editBookStatusButton[i].addEventListener("click", changeBookStatus);
    }
}


function changeBookStatus(e){
    if (e.target.parentNode.parentNode.querySelector(".book-Status").textContent == "Readed." ){
        e.target.parentNode.parentNode.querySelector(".book-Status").textContent = "Not readed.";
    }else{
        e.target.parentNode.parentNode.querySelector(".book-Status").textContent = "Readed.";
    }

    checkStatusAndChangeColor();
}

function deleteBook(e){
    books = document.querySelectorAll(".books");

    if (books.length > 1){
        booksContainer.removeChild(e.target.parentNode.parentNode);
    }else{
        alert("You can't delete all the books, you need this library... right?");
    }
    
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    console.log(myLibrary);
    bookTitle = myLibrary[myLibrary.length-1].title;
    bookAuthor = myLibrary[myLibrary.length-1].author;
    bookReadStatus = myLibrary[myLibrary.length-1].readed;
    bookPages = myLibrary[myLibrary.length-1].pages;

}

function showBookFormToUser(e){
    bookForm.style.display = "flex";
    bookForm.style.alignItems = "center";
    bookForm.style.justifyContent = "center";
    bookForm.style.flexDirection = "column";

}

function closeBookForm(){
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";   
    }

    bookForm.style.display = "none";
}

function clickOutside(e){
    if (e.target.getAttribute("class") == "bookFormContainer") {
        bookForm.style.display = "none";
    }
}

function renderBook(){
    let defaultBookCard;

    while (true) {
        defaultBookCard = document.querySelector(".books").cloneNode(true);
        break;
    }

    booksContainer.append(defaultBookCard);
    booksContainer.childNodes[booksContainer.childNodes.length-1].querySelector("h2").textContent = `${bookTitle}`;
    booksContainer.childNodes[booksContainer.childNodes.length-1].querySelector("h3").textContent = `${bookAuthor}`;
    booksContainer.childNodes[booksContainer.childNodes.length-1].querySelector(".book-Status").textContent = `${bookReadStatus}`;
    booksContainer.childNodes[booksContainer.childNodes.length-1].querySelector(".book-pages").textContent = `${bookPages} pages.`;

    if (booksContainer.childNodes[booksContainer.childNodes.length-1].querySelector(".book-Status").textContent == "Not readed.") {
        booksContainer.childNodes[booksContainer.childNodes.length-1].querySelector(".book-Status").style.color = "#f85151";
    }else if (booksContainer.childNodes[booksContainer.childNodes.length-1].querySelector(".book-Status").textContent == "Readed.") {
        booksContainer.childNodes[booksContainer.childNodes.length-1].querySelector(".book-Status").style.color = "#33c55f";
    }
    
    defaultBookStatus = document.querySelectorAll(".book-Status");
    addEventListenerToEditStatusButtons();
}

function addBookToArrayAndRenderIt(e){
    let title = "default";
    let author = "default";
    let pages = "default";
    let readed = "default";

    for (let i = 0; i < inputs.length; i++) {
        console.log(i);
        switch (i) {
            case 0:
                title = inputs[i].value;
                break;
        
            case 1:
                author = inputs[i].value;
                break;

            case 2:
                pages = inputs[i].value;
                break;
        }
    }

    if (bookStatus.value == "notReaded") {
        readed = "Not readed.";

    }else{
        readed = "Readed.";
    }

    let newBook = new Book(title, author, pages, readed);

    addBookToLibrary(newBook);
    renderBook(e)
    addEventListenerToDeleteButtons()
    closeBookForm();
}


checkStatusAndChangeColor();
addEventListenerToEditStatusButtons();
addEventListenerToDeleteButtons();
mainAddButton.addEventListener("click", showBookFormToUser);
window.addEventListener("click", clickOutside);
cancelButton.addEventListener("click", closeBookForm);
addButton.addEventListener("click", addBookToArrayAndRenderIt);