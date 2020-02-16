<template>
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
</template>

<script>
import frutasMixin from './frutasMixin'
import usuarioMixin from './usuarioMixin'

export default {
  name: 'Frutas',
  mixins: [frutasMixin, usuarioMixin],
  created() {
    console.log('Created - Frutas.vue')
  }
}
</script>

<style scoped>

</style>