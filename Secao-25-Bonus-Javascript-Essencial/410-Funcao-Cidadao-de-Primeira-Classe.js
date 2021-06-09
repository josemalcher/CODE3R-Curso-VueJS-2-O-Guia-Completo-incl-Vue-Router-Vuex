//Função em JS é FirstClass Object (Citizens)
// Highter-order function

// cliar de forma literal
function fn1() {

}

// Armazenar em uma variável
const fn2 = function () {
}

// armazenar em um array
const array = [function (a, b) {
    return a + b
}, fn1, fn2]
console.log(array[0](2, 3));

//Armazenar em um atributo de objeto
const obj = {};
obj.falar = function () {
    return "Olá";
};
console.log(obj.falar());

// Passar função como param
function run(fun) {
    fun();
}

run(function () {
    console.log('Correndo por funções')
})

// uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c);
    };
}

//soma(2, 3)(4); // 9
const cincoMais = soma(3, 2);
cincoMais(4); //9