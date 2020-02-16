<template>
  <div>
    <Rotulo nome="Nome">
      <input
        :value="value.nome"
        @input="alterarNome"
        type="text"
      >
    </Rotulo>
    <Rotulo nome="Sobrenome">
      <input
        :value="value.sobrenome"
        @input="alterarSobrenome"
        type="text"
      >
    </Rotulo>
  </div>
</template>

<script>
import Rotulo from './Rotulo'

export default {
  components: { Rotulo },
  name: 'NomeCompleto',
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  methods: {
    alterarNome($event) {
      this.$emit('input', {
        nome: $event.target.value,
        sobrenome: this.value.sobrenome
      })
    },
    alterarSobrenome($event) {
      this.$emit('input', {
        nome: this.value.nome,
        sobrenome: $event.target.value
      })
    }
  }
}
</script>

<style scoped>

</style>