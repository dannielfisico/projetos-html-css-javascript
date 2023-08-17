const alunos = [
  { nome: "João", nota: 7.3, bolsista: false },
  { nome: "Maria", nota: 9.2, bolsista: true },
  { nome: "Pedro", nota: 9.8, bolsista: false },
  { nome: "Ana", nota: 8.7, bolsista: true },
];

const notasAlunos = alunos.map((a) => a.nota);
const nomesAlunos = alunos.map((a) => a.nome);
console.log(notasAlunos);
console.log(nomesAlunos);

//Listar os alunos bolsitas

const alunosBolsitas = alunos.map((a) => {
  if (a.bolsista) {
    return a.nome;
  } else {
    // return `O aluno(a) ${a.nome} NÃO é bolsista`
  }
}).reduce(nome => nome != "undefined" );

console.log(alunosBolsitas);
