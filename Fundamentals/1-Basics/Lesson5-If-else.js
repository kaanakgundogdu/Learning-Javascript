
const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log("You can start driving license 🚗🚚🛴🚲🛵")
}
else {
    const yearsLeft = 18 - age;
    console.log(`You are too young wait for ${yearsLeft} years 💕💖🤸‍♂️`)
}

const birthYear = 1995;
let century;

if (birthYear <= 2000) {
    century = 20;
}
else {
    century = 21;
}

console.log(century);