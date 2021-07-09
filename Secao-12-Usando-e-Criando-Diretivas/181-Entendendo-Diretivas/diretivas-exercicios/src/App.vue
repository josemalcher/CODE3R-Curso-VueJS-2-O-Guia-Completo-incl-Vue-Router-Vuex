<template>
  <div id="app">
    <h1>Diretivas</h1>
    <hr>
    <p v-text="'Usando Directivas <strong>v-text</strong>'"></p>
    <p v-html="'Usando Directivas <strong>v-html</strong>'"></p>
    <p v-destaque:fundo.atrasar="'lightblue'">Testando Directivas</p>
    <p v-destaque.atrasar="cor">Testando...</p>
    <hr>
    <p v-destaque-local:fundo.atrasar="'lightblue'">Testando Directivas</p>
    <p v-destaque-local.atrasar="cor">Testando...</p>
  </div>
</template>

<script>
export default {
  components: {},
  directives: {
    'destaque-local': {
      bind(el, binding, vnode) {

        // eslint-disable-next-line no-unused-vars
        let atraso = 0;

        if (binding.modifiers['atrasar']) {
          atraso = 3000;
        }
        setTimeout(() => {

          if (binding.arg === 'fundo') {
            el.style.backgroundColor = binding.value;
          } else {
            el.style.color = binding.value;
          }
        },atraso);
      }
    }
  },
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
