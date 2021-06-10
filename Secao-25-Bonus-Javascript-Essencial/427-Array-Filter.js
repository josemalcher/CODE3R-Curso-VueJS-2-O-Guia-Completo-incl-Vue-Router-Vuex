Array.prototype.filter2 = function (callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray

};

const produtos = [
    {nome: 'Notebook',         preco: 2000 , fragil: true},
    {nome: 'Ipad Pro',         preco: 5000 , fragil: true},
    {nome: 'Copo de vidro',    preco: 1 ,    fragil: false},
    {nome: 'copo de plastico', preco: 4 , fragil: false},
    {nome: 'copo de vidro',    preco: 5 , fragil: true},
    {nome: 'celular',          preco: 1000 , fragil: true},
]

const caro   = produto => produto.preco >= 500;
const fragil = produto => produto.fragil;

console.log(produtos.filter2(caro).filter2(fragil));