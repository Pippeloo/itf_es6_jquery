// Centimeters to Feet
const centimeters = 60;
const factor = 0.0328084;
var feet = centimeters * factor;
// round to two decimal places
feet = feet.toFixed(2);

console.log(`${centimeters} centimeters is equal to ${feet} feet.`);

const cmHtml = document.getElementById('centimeters');
cmHtml.innerHTML = `${centimeters}`;

const feetHtml= document.getElementById('feet');
feetHtml.innerHTML = `${feet}`;
