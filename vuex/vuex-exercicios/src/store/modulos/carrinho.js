export default {
  namespaced: true,
  /**
   */
  state: {
    produtos: []
  },
  /**
   */
  getters: {
    /**
     * @param state
     * @returns {number}
     */
    valorTotal(state) {
      return state.produtos.map(p => p.quantidade * p.preco)
        .reduce((total, atual) => total + atual, 0)
    }
  },
  /**
   */
  mutations: {
    /**
     * @param state
     * @param payload
     */
    adicionarProduto(state, payload) {
      state.produtos.push(payload)
    }
  },
  /**
   */
  actions: {
    /**
     * @param commit
     * @param payload
     */
    adicionarProduto: {
      root: true,
      handler({ commit }, payload) {
        setTimeout(() => {
          commit('adicionarProduto', payload)
        }, 1000)
      }
    }
  }
}