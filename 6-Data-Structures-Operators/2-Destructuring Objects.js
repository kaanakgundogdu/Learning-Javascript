'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
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
};

const { name, openingHours, categories } = restaurant;

console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

//Default variables
const { menu = [], starterMenu: starters = [] } = restaurant;

console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// {a,b}=obj;//gives error
({ a, b } = obj);
console.log(a, b);

//nested objects

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
////
console.log('----------Order funct---------');

restaurant.orderDelivery({
  time: '23:21',
  address: 'Uskudar Istanbul',
  mainIndex: 2,
  starterIndex: 2,
});

console.log('----------DiffrentOrder with missing parameters---------');
restaurant.orderDelivery({
  address: 'Uskudar Istanbul',
});
