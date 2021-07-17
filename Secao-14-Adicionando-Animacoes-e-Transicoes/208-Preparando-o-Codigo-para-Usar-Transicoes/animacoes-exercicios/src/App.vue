<template>
  <div id="app" class="container-fluid">
    <h1>Animações</h1>
    <hr>
    <b-button variant="primary"
              class="mb-4"
              @click="exibir = !exibir">
      Mostrar Mensagem
    </b-button>
    <transition name="fade" appear>
      <b-alert variant="info" show v-if="exibir">{{ msn }}</b-alert>
    </transition>

    <transition name="slide" type="animation" appear>
      <!--      <b-alert variant="info" show v-if="exibir">{{ msn }}</b-alert>-->
      <b-alert variant="info" show v-show="exibir">{{ msn }}</b-alert>
    </transition>

    <hr>
    <transition
        enter-active-class="animated bounce"
        leave-active-class="animated shake"
    >
      <b-alert variant="info" show v-if="exibir">{{ msn }}</b-alert>
    </transition>
    <hr>

    <b-select v-model="tipoAnimacao" class="mb-4">
      <option value="fade">Fade</option>
      <option value="slide">Slide</option>
    </b-select>
    <transition :name="tipoAnimacao" mode="out-in">
      <b-alert variant="info" show key="info" v-if="exibir">{{ msn }}</b-alert>
      <b-alert variant="warning" show key="warn" v-else>{{ msn }}</b-alert>
    </transition>
    <hr>
    <button @click="exibir2 = !exibir2">Mostrar</button>
    <transition
        :css="false"
        @before-enter="beforEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @enter-cancelled="enterCancelled"

        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
        @leave-cancelled="leaveCancelled"
    >
      <div class="caixa" v-if="exibir2"></div>
    </transition>
    <hr>

    <div class="mb-4">
      <b-button class="mr-2" variant="primary" @click="componenteSelecionado = 'AlertaInfo'">Info</b-button>
      <b-button variant="secondary" @click="componenteSelecionado = 'AlertaAdvertencia'">Advertência</b-button>
    </div>
    <transition name="fade" mode="out-in">
      <component :is="componenteSelecionado"></component>
    </transition>

    <hr>
    <b-button @click="adicionaAluno" class="mb-4">Admicionar Aluno</b-button>
    <transition-group name="slide" tag="div">
      <b-list-group v-for="(aluno, i) in alunos" :key="aluno">
        <b-list-group-item @click="removeAluno(i)">{{ aluno }}</b-list-group-item>
      </b-list-group>
    </transition-group>
  </div>
</template>

<script>
import AlertaInfo from "./AlertaInfo.vue";
import AlertaAdvertencia from "./AlertaAdvertencia.vue";

export default {
  components: {
    AlertaInfo, AlertaAdvertencia
  },
  data() {
    return {
      alunos: ['Jose', 'Luciana', 'Paulo', 'tereza'],
      msn: 'Uma mensagem de informação para o Usuário',
      exibir: false,
      exibir2: true,
      tipoAnimacao: 'fade',
      componenteSelecionado: 'AlertaInfo'
    }
  },
  methods: {
    adicionaAluno() {
      const s = Math.random().toString(36).substring(2);
      this.alunos.push(s);
    },
    removeAluno(indice) {
      this.alunos.splice(indice, 1)
    },
    animar(el, done, negativo) {
      let rodada = 1
      const temporizador = setInterval(() => {
        const novaLargura = this.larguraBase +
            (negativo ? -rodada * 10 : rodada * 10)
        el.style.width = `${novaLargura}px`
        rodada++
        if (rodada > 30) {
          clearInterval(temporizador)
          done()
        }
      }, 20)
    },
    beforEnter(el) {
      this.larguraBase = 0
      el.style.width = `${this.larguraBase}px`
    },
    enter(el, done) {
      this.animar(el, done, false)
    },
    /*    afterEnter(el){
          console.log('AfterEnter')
        },*/
    /*    enterCancelled() {
          console.log('EnterCancelled');
        },*/
    beforeLeave(el) {
      this.larguraBase = 300
      el.style.width = `${this.larguraBase}px`
    },
    leave(el, done) {
      this.animar(el, done, true)
    },
    /*    afterLeave(el) {
          console.log(afterLeave)
        },
        leaveCancelled(){
          console.log('leaveCancelled')
        }*/
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 1.5rem;
}

.caixa {
  height: 100px;
  width: 300px;
  margin: 30px auto;
  background-color: lightgreen;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}

@keyframes slide-in {
  from {
    transform: translateY(40px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(40px);
  }
}

.slide-enter-active {
  animation: slide-in 2s ease;
  transition: opacity 2s;
}

.slide-leave-active {
  position: absolute;
  width: 100%;
  animation: slide-out 2s ease;
  transition: opacity 2s;
}

.slide-enter, .slide-leave-to {
  opacity: 0;
}

.slide-move {
  transition: transform 1s;
}
</style>
