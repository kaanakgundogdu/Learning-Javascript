


const kaan = {
    firstName: 'Kaan',
    lastName: 'Akg',
    birthYear: 1995,
    job: 'developer',
    friends: ['Me', 'Myself', 'Nobody'],
    hasDriverLicense: true,

    //First version wants to take a parameter for calculating age

    calcAge: function (birthYear) {
        return 2022 - birthYear;
    },

    //Using this methode for calculaing age

    calcAgeNew: function () {
        return 2022 - this.birthYear;
    },

    //More advanced calculation for code logic
    calcAgeAdvanced: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        const licenseString = this.hasDriverLicense ? 'has a' : 'has not a';

        return `${kaan.firstName} is a ${kaan.calcAgeAdvanced()} years old ${kaan.job}, and he ${licenseString} drivers license.`;

    }
};

console.log(kaan.calcAge(kaan.birthYear));
console.log(kaan['calcAge'](kaan.birthYear));
console.log(kaan.calcAgeNew());
console.log(kaan.calcAgeAdvanced());

console.log(kaan.age);
console.log(kaan.age);

console.log(kaan.getSummary());







