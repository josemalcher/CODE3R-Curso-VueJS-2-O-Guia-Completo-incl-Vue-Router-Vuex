<template>
  <div class="container">
    <h1>Componente Usuário</h1>
    <p>Esse é um componente muito legal!</p>
    <p>{{ nome }}</p>
    <button @click="alterarNome">Alterar Nome</button>
    <hr>
    <div class="componentes">
      <app-usuario-info
          :nome="nome"
          @nomeMudou="nome = $event"
      />
<!--      <app-usuario-info
          :nome="nome"
          @nomeMudou="nome = $event.antigo + $event.novo"
      />-->
      <app-usuario-editar/>
    </div>
  </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
  components: {AppUsuarioInfo, AppUsuarioEditar},
  data() {
    return {
      nome: 'José'
    }
  },
  methods: {
    alterarNome() {
      this.nome = "José Malcher JR"
    }
  }
}
</script>

<style scoped>
.container {
  background-color: #27363b;
  color: #fff;
  padding: 10px;
}

.container hr {
  margin: 20px 10px;
}

.componentes {
  display: flex;
}

.componentes > * {
  margin: 10px;
}
</style>
