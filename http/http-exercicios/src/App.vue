<template>
  <div
    class="container"
    id="app"
  >
    <h1>HTTP com Axios</h1>
    <b-alert
      :key="mensagem.texto"
      dismissible
      show
      :variant="mensagem.tipo"
      v-for="mensagem in mensagens"
    >
      {{ mensagem.texto }}
    </b-alert>
    <b-card>
      <b-form-group label="Nome:">
        <b-form-input
          placeholder="Informe o Nome"
          size="lg"
          type="text"
          v-model="usuario.nome"
        />
      </b-form-group>
      <b-form-group label="E-mail:">
        <b-form-input
          placeholder="Informe o E-mail"
          size="lg"
          type="email"
          v-model="usuario.email"
        />
      </b-form-group>
      <hr>
      <b-button
        @click="salvar"
        size="lg"
        variant="primary"
      >Salvar
      </b-button>
      <b-button
        @click="obterUsuarios"
        class="ml-2"
        size="lg"
        variant="success"
      >Obter Usuários
      </b-button>
    </b-card>
    <hr>
    <b-list-group>
      <b-list-group-item
        :key="id"
        v-for="(usuario, id) in usuarios"
      >
        <strong>Nome: </strong> {{ usuario.nome }}<br>
        <strong>E-mail: </strong> {{ usuario.email }}<br>
        <strong>ID: </strong> {{ id }}<br>
        <b-button
          @click="carregar(id)"
          size="lg"
          variant="warning"
        >Carregar
        </b-button>
        <b-button
          @click="excluir(id)"
          class="ml-2"
          size="lg"
          variant="danger"
        >Excluir
        </b-button>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mensagens: [],
      usuarios: [],
      id: null,
      usuario: {
        nome: '',
        email: ''
      }
    }
  },
  methods: {
    limpar() {
      this.usuario.nome = ''
      this.usuario.email = ''
      this.id = null
      this.mensagens = []
    },
    salvar() {
      const metodo = this.id ? 'patch' : 'post'
      const finalUrl = this.id ? `/${ this.id }.json` : '.json'
      this.$http[metodo](`/usuarios${ finalUrl }`, this.usuario)
        .then(() => {
          this.limpar()
          this.obterUsuarios()
          this.mensagens.push({
            texto: 'Operação realizada com sucesso!',
            tipo: 'success'
          })
        })
    },
    obterUsuarios() {
      this.$http('usuarios.json')
        .then((response) => {
          this.usuarios = response.data
        })
    },
    carregar(id) {
      this.id = id
      this.usuario = { ...this.usuarios[id] }
    },
    excluir(id) {
      this.$http.delete(`/usuarios/${ id }.json`)
        .then(() => {
          this.limpar()
          this.obterUsuarios()
        })
      .catch(() => {
        this.mensagens.push({
          texto: 'Problema para excluir!',
          tipo: 'danger'
        })
      })
    }
  },
  created() {
    // eslint-disable-next-line
    this.obterUsuarios()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.5rem;
}

#app h1 {
  text-align: center;
  margin: 50px;
}
</style>
