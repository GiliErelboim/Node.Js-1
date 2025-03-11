const {takeBook,printBooks} = require('./books')
const {printUsers,userTakeBook} = require('./users')

const codeBook=1
const userId=1111
b1=takeBook(codeBook)
u1=userTakeBook(userId)

console.log(b1.toString());
console.log(u1.toString());
let b="true";
if (u1.type==b1.type) {
    console.log("the type of book match");
    b="false";
}
else
console.log("the type of book isnt match");

if (b1.status) {
    console.log("the book is taken");
    b="false";
}
else
console.log("the book isnt taken");

if (u1.status) {
    console.log("the user take book ");
    b="false";
}
else
console.log("the user doesnt take book");

if (b) {
    u1.status="true";
    b1.status="true";
    console.log("the user take the book");
    
}