<template>
  <div class="usuario-detalhe">
    <h3>Usuário Detalhe</h3>
    <hr>
    <p><strong>Código:</strong> {{ id }}</p>
    <!--  :to="`/usuario/${$route.params.id}/editar`"  -->
    <router-link
      :to="{ name: 'editarUsuario', params: { id },
        query: { completo: false, lingua: 'en' },
        hash: '#rodape' }"
      primario
      tag="button"
    >
      Editar
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'UsuarioDetalhe',
  props: ['id'],
  // O componente aq não está pronto ainda
  beforeRouteEnter(to, from, next) {
    console.log('~> Dentro do componente usuário detalhe')
    // Next aceita uma função de callback
    next((vm) => {
      console.log('~> ', vm.id)
    })
  }
  // data() {
  //   return {
  //     id: this.$route.params.id
  //   }
  // },
  // watch: {
  //   // eslint-disable-next-line
  //   $route(to, from) {
  //     this.id = to.params.id
  //   }
  // }
}
</script>

<style scoped>

</style>