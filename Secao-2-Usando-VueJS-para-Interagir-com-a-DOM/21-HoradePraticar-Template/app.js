new Vue({
    el: '#desafio',
    data: {
        nome: 'José Malcher Jr.',
        idade: '36',
        image: 'https://pbs.twimg.com/profile_images/1106193889/logo_Super_A__o_Web_caixa_pequena_400x400.png'
    }, methods: {
        idadeVezesTres() {
            return this.idade * 3
        },
        random() {
            return Math.random();
        }
    }
});