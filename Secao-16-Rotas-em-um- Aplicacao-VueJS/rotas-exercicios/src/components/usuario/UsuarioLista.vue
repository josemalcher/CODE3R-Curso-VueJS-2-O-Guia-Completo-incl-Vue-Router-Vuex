<template>
  <div class="usuario-lista">
    <ul class="lista">
      <router-link tag="li" to="/usuario/1" class="item-lista">Uusário 1</router-link>
      <router-link tag="li" to="/usuario/2" class="item-lista">Uusário 2</router-link>
      <router-link tag="li" to="/usuario/3" class="item-lista">Uusário 3</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "UsuarioLista"
}
</script>

<style scoped>

</style>
