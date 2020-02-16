<template>
  <div id="app">
    <h1>Filtros & Mixins</h1>
    <hr>
    <p>{{ usuarioLogado }}</p>
    <p>{{ cpf | cpf | inverter }}</p>
    <input
      :value="cpf | cpf"
      type="text"
    />
    <hr>
    <Frutas/>
    <hr>
    <div>
      <ul>
        <li
          :key="fruta"
          v-for="fruta in frutas"
        >{{ fruta }}
        </li>
      </ul>
      <input
        @keydown.enter="add"
        type="text"
        v-model="fruta"
      >
    </div>
  </div>
</template>

<script>
import frutasMixin from './frutasMixin'
import Frutas from './Frutas'
import usuarioMixin from './usuarioMixin'

export default {
  components: { Frutas },
  mixins: [frutasMixin, usuarioMixin],
  filters: {
    cpf(valor) {
      const arr = `${ valor }`.split('')
      arr.splice(3, 0, '.')
      arr.splice(7, 0, '.')
      arr.splice(11, 0, '-')
      return arr.join('')
    }
  },
  data() {
    return {
      cpf: '05894600138'
    }
  },
  created() {
    console.log('Created - App.vue')
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
  font-size: 2.5rem;
}

input {
  font-size: 2.5rem;
}
</style>
