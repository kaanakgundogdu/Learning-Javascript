'use strict';

function calcAge(birthYear) {
  const age = 2022 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      //NOTE:Creating a new variable with same name as outer scope's variable
      const firstName = 'Goku';

      //NOTE:Changing variable with same name as outer scope's variable
      output = 'Kamehameha';
      console.log(output);
      var millenial = false;
      const str = `Oh, and you are a millenial, ${firstName}`;
      console.log(str);
      millenial = true;

      function add(a, b) {
        return a + b;
      }
    }

    // add(2, 3); //  NOTE: in strict mode you cant access ths func but if you dont use strict u  can access.
    console.log(millenial); //can access var in if statement
  }

  printAge();
  return age;
}

const firstName = 'Kaan';
calcAge(1995);
