<template>
  <div class="usuario-editar">
    <h3>Usuário Ediatar</h3>
    <hr>
    <p><strong>Código: </strong>{{ id }}</p>
  </div>
</template>

<script>
export default {
  name: "UsuarioEditar",
  props: ['id'],
}
</script>

<style scoped>

</style>
