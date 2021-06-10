const alunos = [
    {nome: 'jose', nota: 10, bolsista: false},
    {nome: 'maria', nota: 5, bolsista: false},
    {nome: 'carlos', nota: 7, bolsista: true},
    {nome: 'fabio', nota: 4, bolsista: false},
    {nome: 'lorena', nota: 9, bolsista: true},
]

console.log(alunos.map(a => a.nota));

const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    console.log(acumulador, atual);
    return acumulador + atual
}, 0); // valor inicial do acumulador

console.log(resultado)
/*
[ 10, 5, 7, 4, 9 ]
0 10
10 5
15 7
22 4
26 9
35
*/