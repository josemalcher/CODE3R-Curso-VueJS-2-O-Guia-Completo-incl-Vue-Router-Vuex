<template>
  <div class="usuario-editar">
    <h3>Usuário Ediatar</h3>
    <hr>
    <p><strong>Código: </strong>{{ id }}</p>
    <p><strong>Completo: </strong>{{$route.query.completo ? 'Sim' : 'Não'}}</p>
    <p><strong>Língua: </strong>{{$route.query.lingua}}</p>
    <div id="rodape">
      <h3>Curso Vue</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "UsuarioEditar",
  props: ['id'],
}
</script>

<style scoped>

#rodape{
  margin-top: 1000px;
}

</style>
