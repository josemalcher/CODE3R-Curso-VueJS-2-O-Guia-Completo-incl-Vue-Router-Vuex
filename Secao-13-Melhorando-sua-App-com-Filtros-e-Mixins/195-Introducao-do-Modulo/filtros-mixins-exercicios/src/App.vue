<template>
  <div id="app">
    <h1>Filtros & Mixins</h1>
    <hr>
    <p>{{ cpf | cpf }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cpf: '09856723412'
    }
  },
  filters: {
    cpf(valor) {
      const arr = valor.split('');
      arr.splice(3,0, '.')
      arr.splice(7,0, '.')
      arr.splice(11,0, '-')
      return arr.join('')
    }
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
</style>
