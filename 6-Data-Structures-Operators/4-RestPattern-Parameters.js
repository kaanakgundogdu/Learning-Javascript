'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address = 'asdsa',
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} , ${this.mainMenu[mainIndex]}, time:${time}, address:${address}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIng, ...otherIngs) {
    console.log(mainIng, otherIngs);
  },
};
console.log('-----------------Destructring--------------');
console.log('-----------------Arrays--------------');

//SPREAD beac. on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

//REST, becaouse on LEFT side
const [a, b, ...others] = [1, 2, 3, 4, 5, 6];

console.log(a, b, others);

const [pizza, , risotto, ...otherFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFoods);

console.log('-----------------Objects--------------');

//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

console.log('-----------------Functions--------------');
//Functions
const add = function (...numbers) {
  let sum = 0;
  for (let index = 0; index < numbers.length; index++) {
    sum += numbers[index];
  }
  console.log(sum);
};

add(2, 3);
add(5, 6, 7, 8, 9, 10);
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 12, 13);

const x = [23, 26, 6];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

restaurant.orderPizza('egg');
