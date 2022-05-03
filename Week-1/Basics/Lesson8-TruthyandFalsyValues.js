
//There are 5 falsy values: 0, '', undefined, null, NaN , others are truthy values.

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean('Kaan'));
console.log(Boolean(2));

const money = 100;

if (money) {
    console.log("Don't spend it all!");
} else {
    console.log("You broke asf!");
}


let height = 180 // if you give this value 0 it causes a bug in if statement later we fix this bug

if (height) {
    console.log("YAY! Height is defined!");
} else {
    console.log("Height is undefined!");
}