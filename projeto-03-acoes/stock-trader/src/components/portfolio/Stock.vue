<template>
  <v-flex
    class="pr-3 pb-3"
    lg4
    md6
    xs12
  >
    <v-card class="blue darken-3 white--text">
      <v-card-title class="headline">
        <strong>{{ stock.name }} <small>(Preço: {{ stock.price | currency }} | Qtde: {{ stock.quantity }})</small></strong>
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field
          :error="insufficientFunds || !Number.isInteger(quantity)"
          label="Quantidade"
          type="number"
          v-model.number="quantity"
        />
        <v-btn
          :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(quantity)"
          @click="sellStock"
          class="blue darken-3 white--text"
        >{{ insufficientFunds ? 'Insuficiente' : 'Vender'}}
        </v-btn>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: 'Stock',
  props: ['stock'],
  data() {
    return {
      quantity: 0
    }
  },
  methods: {
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      // Chama a action
      this.$store.dispatch('sellStock', order)
      this.quantity = 0
    }
  },
  computed: {
    insufficientFunds() {
      return this.quantity > this.stock.quantity
    }
  }
}
</script>

<style scoped>

</style>