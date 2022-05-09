'use strict';

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [3, -2, -6, -1, 'error', 9, 13, 18, 15, 14, 9, 5];

const tempAmplitude = function (temp1, temp2) {
  const temps = temperatures.concat(temperatures2);
  let lowest = temps[0];
  let highest = temps[0];
  for (let index = 0; index < temps.length; index++) {
    if (temps[index] === 'error') continue;
    if (lowest >= temps[index]) {
      lowest = temps[index];
    }
    if (highest <= temps[index]) {
      highest = temps[index];
    }
  }

  return highest - lowest;
};

console.log(tempAmplitude(temperatures, temperatures2));
