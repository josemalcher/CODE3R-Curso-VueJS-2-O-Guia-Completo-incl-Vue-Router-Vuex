Array.prototype.map2 = function (callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this));
    }
};

const carrinho = [
    '{"nome": "borracha"         , "preco": 3.45}',
    '{"nome": "lapis"            , "preco": 0.45}',
    '{"nome": "Kit lapis de cor" , "preco": 10.45}',
    '{"nome": "Caneta"           , "preco": 1.45}',
]

// Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json);
const apenasPreco = produto => produto.preco;

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco);

console.log(resultado);