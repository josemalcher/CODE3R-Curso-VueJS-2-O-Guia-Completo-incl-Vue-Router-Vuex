// let e const
{
    var a = 10 // global

    let b = 30 // bloco
    console.log(b)
}
console.log(a)
//console.log(b) //  b is not defined

//Template String
const produto = 'iPad';
console.log(`${produto} é CARO!`);

//Destructuring
const [l, e, ...tras] = 'TESTE';
console.log(l, e, tras); // T E [ 'S', 'T', 'E' ]

const [x, y, z] = [1, 2, 3];
console.log(x,y) // 1 2

const {idade: i, nome} = {nome: 'ANA' , idade: 23};
console.log(i, nome); // 23 ANA

