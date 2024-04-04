interface Book {
  title: string;
  author: string;
  pages: number;
}

class Library {
  private books: Book[];

  constructor() {
    this.books = [];
  }

  addBook(book: Book): void {
    this.books.push(book);
  }

  getTotalPages(): number {
    return this.books.reduce((total, book) => total + book.pages, 0);
  }
}

const library = new Library();
library.addBook({
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  pages: 180,
});
library.addBook({
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  pages: 281,
});

const total: number = library.getTotalPages();
console.log(`Total pages: ${total}`);
