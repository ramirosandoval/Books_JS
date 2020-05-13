function Book(title, author, pages, readed){

    this.readed = readed;
    this.author = author;
    this.title = title;
    this.pages = pages;

    if(readed.toLowerCase() == "no"){
        readed = "haven't";
    }else{
        readed = "already";
    }

    this.info = function showBookInfo(){
        return ` "${title}" by ${author}, it has ${pages} pages. You ${readed} finished reading it`;
    }
    
}

const itBook = new Book("It", "Stephen King", "1600", "NO");
const ciberTormentaBook = new Book("Ciber Tormenta", "Matthew Mather", "412", "yEs");

console.log(itBook.info());
console.log(ciberTormentaBook.info());