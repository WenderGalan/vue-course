<template>
  <div
    class="container-fluid"
    id="app"
  >
    <h1>Animações</h1>
    <hr>
    <b-button
      @click="exibir = !exibir"
      class="mb-4"
      variant="primary"
    >Mostrar mensagem
    </b-button>
    <transition
      appear
      name="fade"
    >
      <b-alert
        show
        v-if="exibir"
        variant="info"
      >{{ msg }}
      </b-alert>
    </transition>
    <transition
      appear
      name="slide"
      type="animation"
    >
      <b-alert
        show
        v-show="exibir"
        variant="info"
      >{{ msg }}
      </b-alert>
    </transition>
    <transition
      enter-active-class="animated bounceOut"
      leave-active-class="animated shake"
    >
      <b-alert
        show
        v-show="exibir"
        variant="info"
      >{{ msg }}
      </b-alert>
    </transition>

    <hr>
    <b-select
      class="mb-4"
      v-model="tipoAnimacao"
    >
      <option value="fade">Fade</option>
      <option value="slide">Slide</option>
    </b-select>
    <transition
      :name="tipoAnimacao"
      mode="out-in"
    >
      <b-alert
        key="info"
        show
        v-if="exibir"
        variant="info"
      >{{ msg }}
      </b-alert>
      <b-alert
        key="warn"
        show
        v-else
        variant="warning"
      >{{ msg }}
      </b-alert>
    </transition>
    <hr>
    <button @click="exibir2 = !exibir2">Alternar</button>
    <transition
      :css="false"
      @after-enter="afterEnter"
      @after-leave="afterLeave"
      @before-enter="beforeEnter"
      @before-leave="beforeLeave"
      @enter="enter"
      @enter-cancelled="enterCancelled"
      @leave="leave"
      @leave-cancelled="leaveCancelled"
    >
      <div
        class="caixa"
        v-if="exibir2"
      >
      </div>
    </transition>
    <hr>
    <div class="mb-4">
      <b-button
        @click="componenteSelecionado = 'AlertaInfo'"
        class="mr-2"
        variant="primary"
      >Info
      </b-button>
      <b-button
        @click="componenteSelecionado = 'AlertaAdvertencia'"
        variant="secondary"
      >Advertência
      </b-button>
    </div>
    <transition
      mode="out-in"
      name="fade"
    >
      <component
        :is="componenteSelecionado"
      />
    </transition>
    <hr>
    <b-button @click="adicionarAluno" class="mb-4">Adicionar Aluno</b-button>
    <transition-group name="slide" tag="div">
      <b-list-group
        :key="aluno"
        v-for="(aluno, i) in alunos"
      >
        <b-list-group-item @click="removerAluno(i)">
          {{ aluno }}
        </b-list-group-item>
      </b-list-group>
    </transition-group>
  </div>
</template>

<script>
import AlertaAdvertencia from './AlertaAdvertencia'
import AlertaInfo from './AlertaInfo'

export default {
  components: {
    AlertaInfo,
    AlertaAdvertencia
  },
  data() {
    return {
      alunos: ['Roberto', 'Julia', 'Paulo', 'Teresa'],
      msg: 'Uma mensagem de informação para o usuário!',
      exibir: false,
      exibir2: true,
      tipoAnimacao: 'fade',
      larguraBase: 0,
      componenteSelecionado: 'AlertaInfo'
    }
  },
  methods: {
    adicionarAluno() {
      const s = Math.random().toString(36).substring(2)
      this.alunos.push(s)
    },
    removerAluno(indice) {
      this.alunos.splice(indice, 1)
    },
    animar(el, done, negativo) {
      let rodada = 1
      const temporizador = setInterval(() => {
        const novaLargura = this.larguraBase +
          (negativo ? -rodada * 10 : rodada * 10)
        el.style.width = `${ novaLargura }px`
        rodada++
        if (rodada > 30) {
          clearInterval(temporizador)
          done()
        }
      }, 30)
    },
    beforeEnter(el) {
      this.larguraBase = 0
      el.style.width = `${ this.larguraBase }px`
    },
    enter(el, done) {
      this.animar(el, done, false)
    },
    // afterEnter(el) {
    //   console.log('~> afterEnter')
    // },
    // enterCancelled(el) {
    //   console.log('~> enterCancelled')
    // },
    beforeLeave(el) {
      this.larguraBase = 300
      el.style.width = `${ this.larguraBase }px`
    },
    leave(el, done) {
      this.animar(el, done, true)
    }
    // afterLeave(el) {
    //   console.log('~> afterLeave')
    // },
    // leaveCancelled(el) {
    //   console.log('~> leaveCancelled')
    // }
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
  width: 100px;
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
    tranform: translateY(40px);
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
