<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Vários detalhes...</p>
    <p>nome do usuário: <strong>{{ inverterNome() }}</strong></p>
    <p>Idade do usuário <strong>{{ idade }}</strong></p>
    <button @click="reiniciarNome">Reiniciar Nome</button>
    <button @click="reiniciarFn">Reiniciar Nome (CALLBack)</button>
  </div>
</template>

<script>

import barramento from '@/barramento';

export default {
  //props: ['nome'],
  props: {
    sobrenome: String,
    nome: {
      type: String,
      default: 'Anônimo',
      required: true
    },
    idade: [Number, String],
    reiniciarFn: Function
  },
  methods: {
    inverterNome() {
      return this.nome.split('').reverse().join('')
    },
    reiniciarNome(){
      //const antigo = this.nome;
      this.nome = "PEDRO";
      this.$emit('nomeMudou', this.nome);
/*    this.$emit('nomeMudou', {
        nome: this.nome,
        antigo
      });*/
    }
  },
  created() {
    barramento.quandoIdadeMudar( idade => {
      this.idade = idade
    })
  }
}
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
