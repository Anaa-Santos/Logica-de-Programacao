// conversor
let anos = Number(prompt("Digite a quantidade de anos:"));
let meses = Number(prompt("Digite a quantidade de meses:"));
let dias = Number(prompt("Digite a quantidade de dias:"));

let totalDias = (anos * 365) + (meses * 30) + dias;

alert("O total em dias é: " + totalDias);