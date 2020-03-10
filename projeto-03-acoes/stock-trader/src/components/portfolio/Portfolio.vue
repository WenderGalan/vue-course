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
import { mapGetters } from 'vuex'
import Stock from './Stock'

export default {
  name: 'Portfolio',
  components: {
    Stock
  },
  computed: {
    ...mapGetters({
      stocks: 'stockPortfolio'
    })
  }
}
</script>

<style scoped>

</style>