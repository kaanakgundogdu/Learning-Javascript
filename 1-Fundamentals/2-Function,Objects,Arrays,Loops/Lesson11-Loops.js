

for (let rep = 1; rep <= 5; rep++) {
    console.log(`Lifting weights repetition ${rep}🐱‍💻`)
}


const kaan = {
    firstName: 'Kaan',
    lastName: 'Akg',
    age: 2022 - 1995,
    job: 'developer',
    friends: ['Me', 'Myself', 1000, 'Nobody', 33]
};
const types = [];

for (let i = 0; i < kaan.friends.length; i++) {
    //reading array
    console.log(kaan.friends[i]);

    //filling array
    // types[i] = typeof kaan.friends[i];
    types.push(typeof kaan.friends[i]);
}

console.log(types);


const birthYears = [1990, 1991, 1992, 1993, 1994, 1995];
const ages = [];

for (let i = 0; i < birthYears.length; i++) {
    ages.push(2022 - birthYears[i]);
}
console.log(ages);


//continue and break
console.log("---ONLY STRINGS---");
for (let i = 0; i < kaan.friends.length; i++) {
    //reading array
    if (typeof kaan.friends[i] !== 'string') continue;

    console.log(kaan.friends[i], typeof kaan.friends[i]);
}


console.log("---BREAK WITH NUMBER---");
for (let i = 0; i < kaan.friends.length; i++) {
    //reading array
    if (typeof kaan.friends[i] === 'number') break;

    console.log(kaan.friends[i], typeof kaan.friends[i]);
}

//Loop backwards
console.log("---LOOP BACKWARDS FRIENDS---");
for (let i = kaan.friends.length - 1; i >= 0; i--) {
    console.log(i, kaan.friends[i]);
}


//Loop inside loop
console.log("---LOOP INSIDE LOOP---");

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`--Starting exercise ${exercise}....`)
    for (let rep = 1; rep < 5; rep++) {
        console.log(`Exercise ${exercise}: Lifting weights repetition ${rep}🐱‍💻`)
    }
}
