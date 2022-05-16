//variables

console.log(me);
// console.log(job);//you cannot access TDZ
// console.log(year);//you cannot access

var me = 'Kaan';
let job = 'Software developer';
const year = 1995;

//functions

console.log(addDecl(2, 3));
// console.log(addExpression(2, 3));//caannot access
// console.log(addArrow(2, 3));//caannot access
console.log(addArrow);

function addDecl(a, b) {
  return a + b;
}

const addExpression = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

//Example

console.log(numProducts);
//even  you didnt set newprodyct this code block works and it gives you a unnown bug for why this worked.
//So dont use var use const or let for best practice
if (!numProducts) {
  deleteShoppingCart();
}

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All proucts deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
