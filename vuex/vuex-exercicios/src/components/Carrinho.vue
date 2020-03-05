<template>
  <Painel
    :notificacao="produtos.length"
    azul
    titulo="Carrinho"
  >
    <div class="carrinho">
      <table>
        <thead>
        <tr>
          <th>Nome</th>
          <th>Qtde</th>
          <th>Preço</th>
        </tr>
        </thead>
        <tbody>
        <tr
          :key="produto.nome"
          v-for="produto in produtos"
        >
          <td>{{ produto.nome }}</td>
          <td>{{ produto.quantidade }}</td>
          <td>{{ produto.preco | dinheiro }}</td>
        </tr>
        </tbody>
      </table>
      <hr>
      <div class="total">
        <span>Total: <strong>{{ total | dinheiro }}</strong></span>
      </div>
    </div>
  </Painel>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('carrinho', {
      total: 'valorTotal'
    }),
    // total() {
    //   return this.$store.getters.valorTotal
    // },
    produtos() {
      return this.$store.state.carrinho.produtos
    }
  }
}
</script>

<style>
table {
  width: 100%;
}

td {
  border-top: 1px solid #EEE;
  width: 33%;
}

hr {
  margin-top: 30px;
}

.total {
  display: flex;
  justify-content: flex-end;
}
</style>
