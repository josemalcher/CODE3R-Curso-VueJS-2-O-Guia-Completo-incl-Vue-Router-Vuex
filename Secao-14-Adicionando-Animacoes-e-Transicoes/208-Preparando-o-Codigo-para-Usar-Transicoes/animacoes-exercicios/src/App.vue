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
      <b-alert variant="info"    show key="info" v-if="exibir">{{ msn }}</b-alert>
      <b-alert variant="warning" show key="warn" v-else>{{ msn }}</b-alert>
    </transition>
    <hr>
    <button @click="exibir2 = !exibir2">Mostrar</button>
    <transition
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
  </div>
</template>

<script>

export default {
  data() {
    return {
      msn: 'Uma mensagem de informação para o Usuário',
      exibir: false,
      exibir2: true,
      tipoAnimacao: 'fade'
    }
  },
  methods: {
    beforEnter(el){
      console.log('beforEnter')
    },
    enter(el, done){
      console.log('enter')
      done()
    },
    afterEnter(el){
      console.log('AfterEnter')
    },
    enterCancelled() {
      console.log('EnterCancelled');
    },
    beforeLeave(el) {
      console.log('beforLeave');
    },
    leave(el, done) {
      console.log('Leave');
      done()
    },
    afterLeave(el) {
      console.log(afterLeave)
    },
    leaveCancelled(){
      console.log('leaveCancelled')
    }
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
  animation: slide-out 2s ease;
  transition: opacity 2s;
}

.slide-enter, .slide-leave-to {
  opacity: 0;
}
</style>
