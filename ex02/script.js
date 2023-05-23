// Definir a lista de estudantes

const estudantes = [
{nome: "Joao",  nota1: 8.5, nota2:7.2},
{nome: "Maria", nota1: 4.5, nota2:5.8},
{nome: "Pedro", nota1: 7.6, nota2:6.4},
{nome: "Rafael", nota1: 9.0, nota2: 8.5},
{nome: "Leticia", nota1:5.5, nota2:6.0},
];

// Funcao para calcular a media das notas .

function calcularMedia(estudante) {
  return (estudante.nota1 +estudante.nota2) / 2;
}

// funcao para varificar se um estudante foi aprovado

function verificarMedia(estudante) {
  const media = calcularMedia(estudante);
  if (media >= 7){
    return true;
  }else {
    return false;
  }
}

// calcular a media e verificar sucesso para cada estudante

for (let i = 0; i < estudantes.length; i++) {
  const estudante = estudantes[i];
  const media = calcularMedia(estudante);
  const sucesso = verificarMedia(estudante);
  let mensagem = `Parabens, ${estudante.nome}: média = ${media.toFixed(2)}, `;
  if (sucesso){
    mensagem += "Voce foi aprovado(a) no concurso!";

  }else {
    mensagem += "Nao foi dessa vez, Tente novamente!";
  }
  alert(mensagem)
  
}