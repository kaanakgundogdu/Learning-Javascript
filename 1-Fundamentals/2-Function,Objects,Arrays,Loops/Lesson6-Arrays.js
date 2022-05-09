

const friends = ['Kaan', 'Bob', 'Peter'];
console.log(friends);

const years = new Array(1995, 1996, 1997, 1998);

console.log(friends[0]);
console.log(years[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

// friends = ['Bill', 'Solomon'];//you cannot change array with new array but can change one element

const firstName = 'Kaan';
const kaan = [firstName, 'Akg', 2022 - 1995, 'programmer', friends];
console.log(kaan);
console.log(kaan.length);

const calclateAge = function (birthYear) {
    return 2022 - birthYear;
}
const birthYears = [1990, 1991, 1992, 1993, 1994, 1995];

const age1 = calclateAge(birthYears[0]);
const age2 = calclateAge(birthYears[2]);
const age3 = calclateAge(birthYears[birthYears.length - 1]);
const ages = [age1, age2, age3];
console.log(ages);

//Add Elements
friends.push('Malenia');
const newLength = friends.push('Miquella');
console.log(friends);
console.log(newLength);

friends.unshift('Godwyn')
console.log(friends);

//Remove Elements

friends.pop();//Last element removed
console.log(friends);
const removedElement = friends.pop();//Return removed element
console.log(removedElement);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Kaan'))
console.log(friends.indexOf('Nena'))

console.log(friends.includes('Kaan'))
console.log(friends.includes('Nena'))

friends.push(23);
console.log(friends.includes(23));
console.log(friends.includes('23'));//Desnt change string to number
