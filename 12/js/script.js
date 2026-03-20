let fahrenheit = Number(prompt("Digite a temperatura em Fahrenheit:"));
let celsius = (fahrenheit - 32) * 5 / 9;
alert(fahrenheit + "°F correspondem a " + celsius.toFixed(2) + "°C");