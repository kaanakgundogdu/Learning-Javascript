const exampleTemps = [17, 27, 23];
const exampleTemps2 = [12, 5, -5, 0, 4];

function thermometer(temps) {
  let brodcastString = '';
  for (let i = 0; i < temps.length; i++) {
    let currentTemp = temps[i];
    let newString = `${currentTemp}°C in ${i + 1} days ...`;
    brodcastString = brodcastString + newString;
  }
  console.log('...' + brodcastString);
}

thermometer(exampleTemps2);
