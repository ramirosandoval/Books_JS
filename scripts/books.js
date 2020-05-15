let addBookButtons = document.querySelectorAll(".addBook");
const bookForm = document.querySelector(".bookFormContainer");
const cancelButton = document.getElementById("cancelButton");
const addButton = document.getElementById("addButton");
const inputs = document.querySelectorAll("input");
const bookStatus = document.getElementById("newBookStatus");
const bookStatusText = document.querySelectorAll(".book-Status");
let myLibrary = [];

console.log(bookStatusText);

for (let i = 0; i < bookStatusText.length; i++) {
    if (bookStatusText[i].outerText == "Not Readed."){
        bookStatusText[i].style.color = "#f85151";
    }
}

function Book(title, author, pages, readed){
    this.readed = readed;
    this.author = author;
    this.title = title;
    this.pages = pages;
    
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    console.log(myLibrary);
}

function showBookFormToUser(){
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

}

function addBookToArrayAndRenderIt(){
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

    console.log(bookStatus.value);

    if (bookStatus.value == "notFinished") {
        readed = "Not finished.";
    }else{
        readed = "Finished.";
    }

    let newBook = new Book(title, author, pages, readed);
    addBookToLibrary(newBook);
    renderBook()
    closeBookForm();
}

for (let i = 0; i < addBookButtons.length; i++) {
    addBookButtons[i].addEventListener("click", showBookFormToUser);
}

window.addEventListener("click", clickOutside);
cancelButton.addEventListener("click", closeBookForm);
addButton.addEventListener("click", addBookToArrayAndRenderIt);