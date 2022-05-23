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
console.log('----------Or----------');

//Use ANY data type, return ANY data type, short circuiting
console.log(3 || 'Kaan');
console.log('' || 'kaan');
console.log('' || false);
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'hello' || 23 || null);

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('----------And----------');

//Shortcircuits first operaot is falsy

console.log(0 && 'Kaan');
console.log(7 && 'Kaan');

console.log('hello' && 23 && null && 0 && 'kaan');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('onion', 'spinach');
