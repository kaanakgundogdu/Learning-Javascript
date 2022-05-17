'use strict';

let age = 27;
let oldAge = age;
age = 28;

console.log(age);
console.log(oldAge);

console.log('----Primives vs Objects examples----');

const kaan = {
  name: 'Kaan',
  age: 27,
};

const friend = kaan;
friend.age = 34; // Changed original object to

console.log('friend:', friend);
console.log('kaan:', kaan);

let newFriend = kaan; //create new ariable
newFriend.age = 18;
console.log('newFriend:', newFriend);

console.log('----Primives vs Objects examples 2----');
//Primives vs Objects examples
let lastName = 'Akg';
let oldLastName = lastName;
lastName = 'Dodo';
console.log(lastName, oldLastName);

const lora = {
  firstName: 'Lora',
  lastName: 'Puar',
  age: 27,
};

const marriedLora = lora;
marriedLora.lastName = 'Soman';
console.log('before marriage ', lora);
console.log('after marriage ', marriedLora); //Desnt work again cahnge heap value

console.log('----Primives vs Objects examples 3----');

const lora2 = {
  firstName: 'Lora',
  lastName: 'Puar',
  age: 27,
  family: ['Alice', 'Bob'],
};

const loraCopy = Object.assign({}, lora2); //only works for first level
//If there is an object inside an object it give same problem again for it
//Nor a deeo clone it gives shallow copy
loraCopy.lastName = 'Davis';
loraCopy.family.push('Adam');
loraCopy.family.push('Jhon'); //change main objects to

console.log('before marriage ', lora2);
console.log('after marriage ', loraCopy);
