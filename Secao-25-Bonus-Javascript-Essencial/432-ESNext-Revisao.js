// Arrow function
const soma = (a, b) => a + b;
console.log(soma(2,3))

// Arrow FUnction (this)
const lexico1 = () => console.log(this === exports); // true
const lexico2 = lexico1.bind({}); // true
lexico1()
lexico2();

// param default
function log(texto = 'Node') {
    console.log(texto);
}

log(); // Node
log(undefined);// Node
log(null);// null
log('MUDOU'); // MUDOU

// operador rest

function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n);
    return total;
}

console.log(total(2, 4, 6));