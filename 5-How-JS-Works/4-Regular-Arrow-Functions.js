'use strict';

const kaan = {
  firstName: 'Kaan',
  year: 1995,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);

    //Solution 1
    const self = this; //self or that
    const isMillenialFunction = function () {
      console.log(self.year >= 1981 && self.year <= 1996);
    };

    //Solution 2
    const isMillenialArrow = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenialFunction(); //regular functions has undefined this so this dont work.So make a new var self=this
    isMillenialArrow(); //Arrow func inherit this keyword
  },

  greetArrow: () => console.log(`Hey ${this.firstName}`),
  greet: function () {
    console.log(`Hey ${this.firstName}`);
  },
};

kaan.greetArrow();
var firstName = 'Matilda';
kaan.greetArrow();
kaan.greet();
kaan.calcAge();

//Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 3);

var addArrow = (a, b) => {
  console.log(arguments);
  a + b;
};

addArrow(7, 6); //Arrow function has not arguments only exist regular functions
