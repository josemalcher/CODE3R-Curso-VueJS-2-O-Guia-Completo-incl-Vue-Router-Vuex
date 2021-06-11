new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('Estou Alertando AGORA!!');
        },
        alterarValor(event) {
            this.valor = event.target.value;
        }
    }
})