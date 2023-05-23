const estudantes = [
  { nome: "João", nota1: 8.5, nota2: 7.2 },
  { nome: "Maria", nota1: 6.8, nota2: 7.9 },
  { nome: "Pedro", nota1: 7.5, nota2: 6.3 },
  { nome: "Ana", nota1: 9.2, nota2: 8.7 },
  { nome: "Carlos", nota1: 5.7, nota2: 6.8 }
];

// Função para calcular a média das notas de um estudante
function calcularMedia(estudante) {
  return (estudante.nota1 + estudante.nota2) / 2;
}

// Função para verificar se um estudante obteve sucesso no concurso
function verificarSucesso(estudante) {
  const media = calcularMedia(estudante);
  if (media >= 7) {
    return true;
  } else {
    return false;
  }
}

// Loop para calcular a média e verificar sucesso para cada estudante
for (let i = 0; i < estudantes.length; i++) {
  const estudante = estudantes[i];
  const media = calcularMedia(estudante);
  const sucesso = verificarSucesso(estudante);
  let mensagem = `Parabens, ${estudante.nome}: média = ${media.toFixed(2)}, `;
  if (sucesso) {
    mensagem += "Voce foi aprovado(a) no concurso!";
  } else {
    mensagem += "Nao foi dessa vez, Tente novamente!";
  }
  alert(mensagem);
}
