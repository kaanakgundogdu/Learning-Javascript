
const age = 18;

if (age === 18)
    console.log("You're an adult!");

// == has type coersion 
if ('18' == 18)
    console.log("Type coersion for ==");

//For not equal use !=
const newAge = 21;

if (newAge != '18')
    console.log("Your are not 18 years old and support coersion !=");

// === doesnt have type coersion 
if ('18' === 18)
    console.log("Type coersioın doesn't support");
else
    console.log("Type coersioın doesn't support for ===");

if (newAge !== 18)
    console.log("Your are not 18 years old and doesn't support coersion !==");
