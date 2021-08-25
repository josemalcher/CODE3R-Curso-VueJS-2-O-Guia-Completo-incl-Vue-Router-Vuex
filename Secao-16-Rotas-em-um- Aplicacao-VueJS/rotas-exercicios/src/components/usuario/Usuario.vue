<template>
<div class="usuario">
  <h2>Usuário</h2>
  <hr>
  <button sucesso @click="irParaInicio">Voltar</button>
</div>
</template>

<script>
export default {
  name: "Usuario",
  methods:{
    irParaInicio(){
      //this.$router.push('/')
      this.$router.push({
        path: '/'
      });
    }
  }
}
</script>

<style scoped>

</style>
