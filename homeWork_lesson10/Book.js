export class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      console.error('Помилка: Назва книги повинна бути не порожнім рядком.');
      return;
    }
    this._title = value;
  }

  get author() {
    return this._author;
  }

  set author(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      console.error('Помилка: Ім\'я автора повинно бути не порожнім рядком.');
      return;
    }
    this._author = value;
  }

  get year() {
    return this._year;
  }

  set year(value) {
    if (typeof value !== 'number' || value <= 0) {
      console.error('Помилка: Рік видання повинен бути додатнім числом.');
      return;
    }
    this._year = value;
  }

  printInfo() {
    console.log(`Книга: "${this.title}", Автор: ${this.author}, Рік видання: ${this.year}`);
  }

  static getOldestBook(booksArray) {
    if (!Array.isArray(booksArray) || booksArray.length === 0) {
      return null;
    }
    return booksArray.reduce((oldest, current) => {
      return (current.year < oldest.year) ? current : oldest;
    });
  }
}