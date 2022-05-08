

const kaan = {
    firstName: 'Kaan',
    lastName: 'Akg',
    age: 2022 - 1995,
    job: 'developer',
    friends: ['Me', 'Myself', 'Nobody']
};

console.log(kaan);
console.log(kaan.lastName);
console.log(kaan['lastName']);

const nameKey = 'Name';
console.log(kaan['first' + nameKey]);
console.log(kaan['last' + nameKey]);

// console.log(kaan.'last' + nameKey);//this gives you an error

const interestedIn = prompt('What do you wanto to know about Kaan? Choose between firstName,lastName,age,job and friends.');

// console.log(kaan.interestedIn);//this gives you undefined, because kaan doesnt have property name interestedIn

if (kaan[interestedIn]) {
    console.log(kaan[interestedIn]);
}
else {
    console.log('Wrong reques!!! Choose between firstName,lastName,age,job and friends.')
}

//you can add new properties
kaan.location = 'Istanbul';
kaan['favAnime'] = 'One Piece';

console.log(kaan);

console.log(` ${kaan.firstName} has ${kaan.friends.length} friends, and his best friend is called ${kaan.friends[0]}.`);

