const notas = [7.7,6.6, 5.9, 5.5, 9.9, 8.9, 7.9];

// sem callback
let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas);

//Com call back
notasBaixas2 = notas.filter(function (nota) {
    return nota < 7;
});

console.log(notasBaixas2)

const notasMenorque7 = nota => nota < 7;
const notasBaixa3    = notas.filter(notasMenorque7);
console.log(notasBaixa3)