<template>
  <div class="usuario-editar">
    <h3>Usuário Editar</h3>
    <hr>
    <p><strong>Código:</strong> {{ id }}</p>
    <p><strong>Completo:</strong> {{ $route.query.completo ? 'SIM' : 'NÃO' }}</p>
    <p><strong>Língua:</strong> {{ $route.query.lingua }}</p>
    <hr>
    <button
      @click="confirmou = true"
      primario
    >Confirmar
    </button>
    <div id="rodape">
      <h3>Curso Vue</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UsuarioEditar',
  props: ['id'],
  data() {
    return {
      confirmou: false
    }
  },
  // O componente já esta na tela carregado
  beforeRouteLeave(to, from, next) {
    if (this.confirmou) {
      next()
    } else {
      next(confirm('Tem certeza?'))
    }
  }
}
</script>

<style scoped>
#rodape {
  margin-top: 1000px;
}
</style>