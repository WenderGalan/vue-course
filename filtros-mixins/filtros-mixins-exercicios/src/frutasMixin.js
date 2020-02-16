export default {
  data() {
    return {
      fruta: '',
      frutas: ['Banana', 'Maça', 'Laranaja']
    }
  },
  methods: {
    add() {
      this.frutas.push(this.fruta)
      this.fruta = ''
    }
  }
}