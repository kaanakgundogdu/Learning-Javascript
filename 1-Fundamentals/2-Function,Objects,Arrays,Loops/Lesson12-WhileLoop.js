


let i = 1;
while (i <= 5) {
    console.log(`WHILE: Lifting weights repetition ${i}🐱‍💻`)
    i++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
if (dice === 6) {
    console.log('Loop is about to end.......')
}

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log('Loop is about to end.......')
    }
}





