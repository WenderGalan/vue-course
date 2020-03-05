export default {
  /**
   */
  state: {
    quantidade: 2,
    preco: 19.99
  },
  /**
   */
  mutations: {
    /**
     * @param state
     * @param payload
     */
    setQuantidade(state, payload) {
      state.quantidade = payload
    },
    /**
     * @param state
     * @param payload
     */
    setPreco(state, payload) {
      state.preco = payload
    }
  }
}