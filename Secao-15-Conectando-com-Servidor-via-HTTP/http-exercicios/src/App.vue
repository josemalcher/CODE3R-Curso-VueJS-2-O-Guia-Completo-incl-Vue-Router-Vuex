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
      <b-button @click="obterUsuarios"
      size="lg"
      variant="success"
      class="ml-2">Obter Usuários</b-button>
    </b-card>
    <hr>
    <b-list-group>
      <b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
        Nome: {{usuario.nome}} <br>
        E-mail: {{usuario.email}} <br>
        ID: {{usuario.id}} <br>
      </b-list-group-item>
    </b-list-group>
	</div>
</template>

<script>
import axios from 'axios';

export default {
  data(){
    return{
      usuarios: [],
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
    },
    obterUsuarios(){
      //this.$http.get()
      //axios('https://curso-vue-2-26c34-default-rtdb.firebaseio.com/usuarios.json')
      this.$http('usuarios.json')
      .then(res => {
        this.usuarios = res.data;
        console.log(res.data)
      })
      //axios.defaults.headers.common['Authorization'] = 'abc123456';
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
