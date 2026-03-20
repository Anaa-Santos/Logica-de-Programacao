let custoFabrica = Number(prompt("Digite o custo de fábrica do carro:"));

let percentualDistribuidor = 28;
let percentualImpostos = 45;

let custoFinal = custoFabrica + (custoFabrica * percentualDistribuidor / 100) + (custoFabrica * percentualImpostos / 100);

alert("O custo final ao consumidor é: R$ " + custoFinal.toFixed(2));