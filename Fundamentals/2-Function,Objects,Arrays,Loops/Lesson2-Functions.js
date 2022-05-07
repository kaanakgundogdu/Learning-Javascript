


function logger() {
    console.log('My name is Kaan!');
}

logger();
logger();
logger();
logger();


function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);

    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
const orangeJuice = fruitProcessor(0, 3);
const appleOrangeJuice = fruitProcessor(6, 6);

console.log(appleJuice);
console.log(orangeJuice);
console.log(appleOrangeJuice);
console.log(fruitProcessor(3, 3)); // you can use like this



