<template>
  <div class="usuario-detalhe">
    <h3>Usuário Detalhe</h3>
    <hr>
    <p><strong>Código: </strong>{{ id }}</p>
    <router-link
        :to="`/usuario/${id}/editar`"
        primario
        tag="button">Editar</router-link>
  </div>
</template>

<script>
export default {
  name: "UsuarioDetalhe",
  // data(){
  //   return{
  //     id: this.$route.params.id
  //   }
  // },
  // watch:{
  //   $route(to, from){
  //     this.id = to.params.id;
  //   }
  // },
  props: ['id'],
}
</script>

<style scoped>

</style>
