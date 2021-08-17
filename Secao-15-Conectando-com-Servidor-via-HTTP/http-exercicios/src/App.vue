<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
    <b-card>
      <b-form-group label="Nome:">
        <b-form-input
          type="text"
          size="lg"
          v-model="usuario.nome"
          placeholder="Informa o Nome">
        </b-form-input>
      </b-form-group>
      <b-form-group  label="E-mail">
        <b-form-input
            type="email"
            size="lg"
            v-model="usuario.email"
            placeholder="Informa o Email">
        </b-form-input>
      </b-form-group>
      <hr>
      <b-button @click="salvar" size="lg" variant="primary">Salvar</b-button>
    </b-card>
	</div>
</template>

<script>
export default {
  data(){
    return{
      usuario: {
        nome: '',
        email: '',
      }
    }
  },
  methods:{
    salvar(){
      this.$http.post('usuarios.json', this.usuario)
      .then(resp => {
        this.usuario.nome = ''
        this.usuario.email = ''
      })
    }
  }
  /*created() {
    this.$http.post('usuarios.json', {
      nome: 'Jose',
      email: 'malcher.malch@gmail.com'
    }).then(res => {
      console.log(res)
    }).catch(e => {
      console.log(e)
    })
  }*/
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
