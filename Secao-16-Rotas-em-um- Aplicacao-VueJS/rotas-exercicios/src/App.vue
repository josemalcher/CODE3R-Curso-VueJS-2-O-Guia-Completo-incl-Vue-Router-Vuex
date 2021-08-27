<template>
  <div id="app">
    <h1>Rotas com VueRouter</h1>
    <router-view name="menu"></router-view>
    <router-view />
    <router-view name="menuInferior"></router-view>
  </div>
</template>

<script>
//import Menu from './components/template/Menu';

export default {
  //components: {Menu},
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
