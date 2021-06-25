<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Vários detalhes...</p>
    <p>nome do usuário: <strong>{{ inverterNome() }}</strong></p>
  </div>
</template>

<script>
export default {
  //props: ['nome'],
  props: {
    sobrenome: String,
    nome: {
      type: String,
      default: 'Anônimo',
      required: true
    },
    idade: [Number, String]
  },
  methods: {
    inverterNome() {
      return this.nome.split('').reverse().join('')
    }
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
