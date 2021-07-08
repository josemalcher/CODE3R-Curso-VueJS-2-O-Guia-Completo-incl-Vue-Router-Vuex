<template>
  <div id="app">
    <h1>Diretivas</h1>
    <hr>
    <p v-text="'Usando Directivas <strong>v-text</strong>'"></p>
    <p v-html="'Usando Directivas <strong>v-html</strong>'"></p>
    <p v-destaque:fundo.atrasar="'lightblue'">Testando Directivas</p>
    <p v-destaque.atrasar="cor">Testando...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cor: 'blue'
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
