
const bill = 40;
const tipValue = (bill >= 50 && bill < 300) ? bill * 0.15 : bill * .2;

console.log(`Your bill is ${bill} and tip is ${tipValue} dolar you should pay ${bill + tipValue}$.`);

