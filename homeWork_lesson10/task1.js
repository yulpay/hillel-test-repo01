import { Book } from './Book.js';
import { EBook } from './EBook.js';

console.log('1. Об\'єкти класу Book:');
const book1 = new Book('Тіні забутих предків', 'Михайло Коцюбинський', 1911);
const book2 = new Book('Кобзар', 'Тарас Шевченко', 1840);
const book3 = new Book('Тигролови', 'Іван Багряний', 1944);

book1.printInfo();
book2.printInfo();
book3.printInfo();


console.log('\n 2. Об\'єкт класу EBook');
const ebook1 = new EBook('1984', 'Джордж Оруелл', 1949, 'EPUB');
ebook1.printInfo();


console.log('\n3. Гетери та сетери');
book1.year = 1912; 
console.log(`Оновлений рік видання для "${book1.title}": ${book1.year}`); 
book1.year = -500; 


console.log('\n4. getOldestBook');
const library = [book1, book2, book3, ebook1];
const oldestBook = Book.getOldestBook(library);
console.log('Найдавніша книга у масиві:');
oldestBook.printInfo();


console.log('\n5. EBook.fromBook');
const ebookFromRegularBook = EBook.fromBook(book3, 'PDF');
console.log('Нова електронна книга, створена з існуючої паперової:');
ebookFromRegularBook.printInfo();