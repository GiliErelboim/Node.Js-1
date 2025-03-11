let count=0
class Book {
  code ;
  name;
  type;
  status;
  constructor(name, type, status) {
    this.code  = count;
    this.name = name;
    this.type = type;
    count+=1
  }
  toString() {
    return `code:${this.code},name: ${this.name}, type: ${this.type}, status: ${this.status}`;
  }
}
const books = [
  new Book("aaa", "metach", true),
  new Book("bbb", "drama", false),
  new Book("ccc", "regesh", false),
];
function printBooks() {
  for (const b of books) {
    console.log(b.toString());
    console.log();
  }
}
function takeBook(c) {
  for (const b of books) {
    if (b.code == c) {
      return b;
    }
  }
  throw new Error("this book doesnt exist!");
}
module.exports = { printBooks, takeBook };
