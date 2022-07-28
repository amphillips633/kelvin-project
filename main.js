// today's temperature in kelvin
const kelvin = 0;

// today's temperature in celsius
var celsius = kelvin - 273;

// today's temperature in fahrenheit
var fahrenheit = (celsius * (9/5)) + 32;

// temperature in fahrenheit rounded down to nearest whole number
fahrenheit = Math.floor(fahrenheit);

console.log('The temperature is ' + fahrenheit + ' degrees fahrenheit.');

var newton = celsius * (33/100);
newton = Math.floor(newton);

console.log('The temperature is ' + newton + ' degrees Newton');
