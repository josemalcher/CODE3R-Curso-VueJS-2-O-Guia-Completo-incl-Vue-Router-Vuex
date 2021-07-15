<template>
  <div id="app" class="container-fluid">
    <h1>Animações</h1>
    <hr>
    <b-button variant="primary"
              class="mb-4"
              @click="exibir = !exibir">
              Mostrar Mensagem
    </b-button>
    <transition>
      <b-alert variant="info" show v-if="exibir">{{msn}}</b-alert>
    </transition>
  </div>
</template>

<script>

export default {
  data() {
    return {
      msn: 'Uma mensagem de informação para o Usuário',
      exibir: false
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
  font-size: 1.5rem;
}
</style>
