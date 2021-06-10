// Oeprador ... rest(juntar)/Spread (espalhar)
// usar rest com parâmetros de função

//usar spread com objeto
const funcionario = {nome: 'Maria', salario: 20000}
const clone = {ativo: true, ...funcionario};
console.log(clone); // { ativo: true, nome: 'Maria', salario: 20000 }


// usar spread com array
const grupoA = ['João', 'Pedro', 'Goria'];
const grupoFinal = ['Maria', ...grupoA, 'Rafaela'];

console.log(grupoFinal); // [ 'Maria', 'João', 'Pedro', 'Goria', 'Rafaela' ]
