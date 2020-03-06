<template>
  <v-layout
    row
    wrap
  >
    <Stock
      :key="stock.id"
      :stock="stock"
      v-for="stock in stocks"
    />
  </v-layout>
</template>

<script>
import Stock from './Stock'

export default {
  name: 'Stocks',
  components: { Stock },
  computed: {
    stocks() {
      return this.$store.getters.stocks
    }
  }
}
</script>

<style scoped>

</style>