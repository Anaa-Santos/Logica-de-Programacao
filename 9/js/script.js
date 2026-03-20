let salario = Number(prompt("Digite o seu salário atual:"));
let percentual = Number(prompt("Digite o percentual de reajuste (%):"));
let novoSalario = salario + (salario * percentual / 100);

alert("O novo salário é: R$ " + novoSalario.toFixed(2));