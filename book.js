export class Book {
    constructor (title, author, description, pages) {
      this.title =title;
      this.author =author;
      this.description = description;
      this.pages = pages;
      this.currentPage = 1;
      this.read = false;
 
    }
 
    readBook(page) {
 
      if (page < 1 || page > this.pages) {
        return 0;
 
      } else if (page >= 1 && page < this.pages) {
        this.currentPage = page;
        return 1;
 
      } else if(page === this.pages) {
        this.currentPage = page;
        this.read = true;
        return 1;
      }
 
    }
 
 }
 
 export const books = [
 
   new Book("Things Fall Apart", "Chinua Achebe", "A book you should read", 250, 110),
 
   new Book("The Innocent Man", "John Grisham", "Chilling because its true", 400, 10),
 
   new Book("He Came to Set the Captives Free", "Rebecca Brown", "spiritual warfare", 200, 72)]; 
 
   



