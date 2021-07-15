<template>
  <div id="app">
    <h1>Filtros & Mixins</h1>
    <hr>
    <p>Usuário Logado: {{usuarioLogado}}</p>
    <p>{{ cpfAluno | cpf | inverter }}</p>
    <input type="text" :value="cpfAluno | cpf | inverter">
    <hr>
    <Fruta/>
    <hr>
    <ul>
      <li v-for="fruta in frutas" :key="fruta">{{fruta}}</li>
    </ul>
    <input type="text" v-model="fruta" @keydown.enter="add">
  </div>
</template>

<script>
import frutasMixin from './frutasMixin';
import Fruta from "./Fruta.vue";
import usuarioLogado from "./usuarioLogado";

export default {
  components: {Fruta},
  mixins : [frutasMixin, usuarioLogado],
  data() {
    return {
      cpfAluno: '09856723412',
      frutas: ['abacate']
    }
  },
  filters: {
    cpf(valor) {
      const arr = valor.split('');
      arr.splice(3, 0, '.')
      arr.splice(7, 0, '.')
      arr.splice(11, 0, '-')
      return arr.join('')
    }
  },
  methods: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}

input {
  font-size: 2.5rem;
}
</style>
