<template>
  <div id="app">
    <h1>Super Quiz</h1>

    <Question
        v-if="questionMode"
        :question="questions[currentQuestion]"
        @answered="showResult"
    />
    <Result
        v-else
        :result="result"
        @confirmed="nextQuestion"
    />

  </div>
</template>

<script>
import questions from "./util/questions";
import Question from "./components/Question.vue";
import Result from "./components/Result.vue";

export default {
  components: {
    Question, Result
  },
  data() {
    return {
      result: false,
      questionMode: true,
      questions,
      currentQuestion: 0
    }
  },
  methods:{
    showResult(result) {
      this.result = result;
      this.questionMode = false;
    },
    nextQuestion(){
      this.questionMode = true;
      let r = Math.random() * this.questions.length;
      this.currentQuestion = parseInt(r);
    }
  }
}
</script>

<style>
body {
  background: linear-gradient(to right, rgb(0, 0, 70), rgb(28, 181, 224));
  font-family: 'Oswald', sans-serif;
  color: #FFF;
  height: 100vh;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
}

#app h1 {
  font-weight: 200;
  font-size: 4rem;
}

@keyframes flip-out {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(90deg);
  }
}

@keyframes flip-in {
  from {
    transform: rotateY(90deg);
  }
  to {
    transform: rotateY(0deg);
  }
}

.flip-enter-active {
  animation: flip-in 0.3s ease;
}

.flip-leave-active {
  animation: flip-out 0.3s ease;
}
</style>
