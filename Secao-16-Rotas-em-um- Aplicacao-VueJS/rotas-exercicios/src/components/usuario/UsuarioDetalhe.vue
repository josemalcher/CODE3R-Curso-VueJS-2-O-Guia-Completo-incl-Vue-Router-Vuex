<template>
  <div class="usuario-detalhe">
    <h3>Usuário Detalhe</h3>
    <hr>
    <p><strong>Código: </strong>{{ id }}</p>
    <!--        :to="`/usuario/${id}/editar`"-->
    <router-link primario
                 :to="{ name:'editarUsuario',
                        params: {id},
                        query: {
                          completo: true,
                          lingua: 'pt'
                        },
                        hash: '#rodape'
                 }"
                 tag="button">Editar
    </router-link>
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
  beforeRouteEnter(to, from, next) {
    //console.log(this.id) // erro
    console.log(' dentro do componente -> usuario detalhe')
    next(vm => {
      console.log(vm.id); // acesso ao id do componente
    })
    const autenticado = true;
    autenticado ? next() : next(false);
  }
}
</script>

<style scoped>

</style>
