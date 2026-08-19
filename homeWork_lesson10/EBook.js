import { Book } from './Book.js';

export class EBook extends Book {
  constructor(title, author, year, format) {
    super(title, author, year);
    this.format = format;
  }

  get format() {
    return this._format;
  }

  set format(value) {
    const validFormats = ['PDF', 'EPUB', 'MOBI', 'FB2', 'TXT'];
    if (typeof value !== 'string' || !validFormats.includes(value.toUpperCase())) {
      console.error('Помилка: Непідтримуваний формат файлу.');
      return;
    }
    this._format = value.toUpperCase();
  }

  printInfo() {
    console.log(`Електронна книга: "${this.title}", Автор: ${this.author}, Рік видання: ${this.year}, Формат: ${this.format}`);
  }

  static fromBook(bookInstance, fileFormat) {
    return new EBook(bookInstance.title, bookInstance.author, bookInstance.year, fileFormat);
  }
}