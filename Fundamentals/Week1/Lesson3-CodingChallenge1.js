//BMI calculation

const markMass = 78;
const markHeight = 169;
const johnMass = 92;
const johnHeight = 195;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
const isMarkBMIhigher = markBMI > johnBMI;
console.log(isMarkBMIhigher);