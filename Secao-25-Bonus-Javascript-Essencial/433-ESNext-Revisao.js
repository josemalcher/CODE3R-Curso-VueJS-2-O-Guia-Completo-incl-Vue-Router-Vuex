// ES8: Object. values / Object.entries
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj)) //     [ 1, 2, 3 ]
console.log(Object.entries(obj))//     [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]


//Melhorias na Notação Literal
const nome = 'JOSE';
const pessoa = {
    nome,
    ola() {
        return "Olá!"
    }
}
console.log(pessoa.nome, pessoa.ola()); // JOSE Olá!

//class
class Animal {

}

class Cachorro extends Animal {
    falar(){
        return 'Au au au ';
    }
}

console.log(new Cachorro().falar()); // Au au au
