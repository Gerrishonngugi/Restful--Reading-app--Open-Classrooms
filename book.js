class Book {
    constructor(title, author, pages, description, read, {currentPage = 1} = {}) {

        this.title = title;
        this.author = author;
        this.pages = Number(pages);
        this.description = description;
        this.read = read; 
        this.currentPage =currentPage;

        console.log(`'Created a Book via class : ${title} by ${author}'`)
  
  
  }

readBook(page) {
    if (page === '' || page < 1 || page > this.pages) {
        return console.warn('page cannot be empty or negative or exceed the total page numbers in the book');

    } else if (page == this.pages) {
        this.currentPage = page;
        this.read = true; 

    } else {
        this.currentPage = page;
        console.log(`I'm currently reading page ${this.currentPage} of the book titled ${this.title} by ${this.author}`);
    }
  }

}



