
//function declaration
//You can call method before defined it
function calculateAgeWithDeclaration(birthYear) {
    return 2022 - birthYear;
}

age1 = calculateAgeWithDeclaration(1995);
console.log(age1);

//function expression
//You cannot call expression before defined it
const calculateAgeWithExpression = function (birthYear) {
    return 2022 - birthYear;
}

const age2 = calculateAgeWithExpression(1995);
console.log(age2);

//Arrow fuction
const calculateAgeWithArrow = birthYear => 2022 - birthYear;
const age3 = calculateAgeWithArrow(1995);
console.log(age3);

const yearsOfRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsOfRetirement(1995, 'Kaan'));
console.log(yearsOfRetirement(1991, 'Sa'));


