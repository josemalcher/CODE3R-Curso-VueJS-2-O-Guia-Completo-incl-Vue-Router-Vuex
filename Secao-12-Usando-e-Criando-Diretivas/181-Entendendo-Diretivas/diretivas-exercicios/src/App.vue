<template>
  <div id="app">
    <h1>Diretivas</h1>
    <hr>
    <p v-text="'Usando Directivas <strong>v-text</strong>'"></p>
    <p v-html="'Usando Directivas <strong>v-html</strong>'"></p>
    <p v-destaque:fundo.atrasar="'lightblue'">Testando Directivas</p>
    <p v-destaque.atrasar="cor">Testando...</p>
    <hr>
    <p v-destaque-local:fundo.atrasar.alternar="'lightblue'">Testando Directivas</p>
    <p v-destaque-local.atrasar="cor">Testando...</p>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  components: {},
  directives: {
    'destaque-local': {
      bind(el, binding, vnode) {

        const aplicarCor = cor => {
          if (binding.arg === 'fundo') {
            el.style.backgroundColor = cor;
          } else {
            el.style.color = cor;
          }
        }

        let atraso = 0;

        const cor1 = binding.value;
        const cor2 = 'purple';
        let corAtual = cor1;

        if (binding.modifiers['atrasar']) {
          atraso = 3000;
        }

        setTimeout(() => {
          setInterval(() => {
            if (binding.modifiers['alternar']) {
              corAtual = corAtual === cor1 ? cor2 : cor1;
              aplicarCor(corAtual)
            } else {
              aplicarCor(binding.value)
            }
          }, 1000);
        }, atraso);
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
