const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celciues',
    // value: prompt('Degrees celsius'),//this give you a string and wrong answer you must change to the number
    value: Number(prompt('Degrees celsius')),
  };
  //   debugger;//you can use this line to the debug right here
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
