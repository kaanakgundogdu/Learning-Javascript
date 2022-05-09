const markMass = 78;
const markHeight = 1.79;
const johnMass = 92;
const johnHeight = 1.75;


const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) higher than John's BMI (${johnBMI}) !`);
} else {

    console.log(`Mark's BMI (${markBMI}) lower than John's BMI (${johnBMI}) !`);
}