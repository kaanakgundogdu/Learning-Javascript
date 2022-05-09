
const jonas = {
    firstName: 'Jonas',
    lastName: 'Smith',
    mass: '92',
    height: '1.95',

    calculateBMI: function () {
        this.BMI = this.mass / this.height ** 2
        return this.BMI;
    }
}

const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: '78',
    height: '1.69',

    calculateBMI: function () {
        this.BMI = this.mass / this.height ** 2
        return this.BMI;
    }
}
jonas.calculateBMI();
mark.calculateBMI();
console.log(`${jonas.firstName} ${jonas.lastName}'s BMI (${jonas.BMI}) ${jonas.BMI > mark.BMI ? 'is higher' : 'is lower'} than ${mark.firstName} ${mark.lastName}'s BMI(${mark.BMI})`)









