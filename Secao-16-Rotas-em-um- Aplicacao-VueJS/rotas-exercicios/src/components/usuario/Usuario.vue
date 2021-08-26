<template>
  <div class="usuario">
    <h2>Usuário</h2>
    <hr>
    <p><strong>Código:</strong>{{ id }}</p>
    <button sucesso @click="irParaInicio">Voltar</button>
  </div>
</template>

<script>
export default {
  name: "Usuario",
  data(){
    return{
      id: this.$route.params.id
    }
  },
  methods: {
    irParaInicio() {
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
