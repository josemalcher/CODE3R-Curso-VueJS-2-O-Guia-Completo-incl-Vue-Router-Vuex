const alunos = [
    {nome: 'jose', nota: 10, bolsista: false},
    {nome: 'maria', nota: 5, bolsista: false},
    {nome: 'carlos', nota: 7, bolsista: true},
    {nome: 'fabio', nota: 4, bolsista: false},
    {nome: 'lorena', nota: 9, bolsista: true},
]

// Desafio 1: todos os alunos são bolsistas?

const todosBolsistas = (resultado, bolsistas) => resultado && bolsistas
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas)); // false

// Desafio 2: Algum aluno é bolsista?
const algumBolsistas = (resultado, bolsista) => resultado || bolsista;
console.log(alunos.map(a => a.bolsista).reduce(algumBolsistas))// true