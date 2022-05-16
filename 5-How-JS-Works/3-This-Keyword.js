'use strict';

console.log(this);

const calcAge = function (birthYear) {
  console.log(2022 - birthYear);
  console.log(this);
};

calcAge(1995);

const calcAgeArrow = birthYear => {
  console.log(2022 - birthYear);
  console.log(this); //use this for parent scope in arrow function
};

calcAgeArrow(1995);

const kaan = {
  year: 1995,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);
  },
};

kaan.calcAge();

const poko = {
  year: 2000,
};

poko.calcAge = kaan.calcAge;
poko.calcAge();

const f = kaan.calcAge;
console.log(f);
// f(); //gives error beacuse there is no this keyword for this funct.
