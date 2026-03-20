let horaInicio = Number(prompt("Digite a hora de início do jogo :"));
let horaFim = Number(prompt("Digite a hora de término do jogo :"));

let duracao;

if (horaFim > horaInicio) {
  duracao = horaFim - horaInicio;
} else if (horaFim < horaInicio) {
  duracao = (24 - horaInicio) + horaFim;
} else {
  duracao = 24; // caso comece e termine na mesma hora
}

alert("A duração do jogo é de " + duracao + " hora(s).");