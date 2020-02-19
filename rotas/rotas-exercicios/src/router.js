import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
import Menu from './components/template/Menu'
import MenuAlt from './components/template/MenuAlt'

Vue.use(Router)

// Carrega de modo lazy os components
const Usuario = () => import(/* webpackChunkName: "usuario" */'./components/usuario/Usuario')
const UsuarioEditar = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioEditar')
const UsuarioLista = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioLista')
const UsuarioDetalhe = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioDetalhe')

const router = new Router({
  mode: 'history',
  scrollBahavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return { x: 0, y: 0 }
  },
  routes: [
    {
      name: 'inicio',
      path: '/',
      // component: Inicio
      components: {
        default: Inicio,
        menu: Menu
      }
    },
    {
      path: '/usuario',
      // component: Usuario,
      components: {
        default: Usuario,
        menu: MenuAlt,
        menuInferior: MenuAlt
      },
      props: true,
      children: [
        {
          path: '',
          component: UsuarioLista
        },
        {
          path: ':id',
          component: UsuarioDetalhe,
          props: true,
          // Intercepta a rota localmente
          beforeEnter: (to, from, next) => {
            console.log('~> Antes da rota usuário detalhe')
            next()
          }
        },
        {
          path: ':id/editar',
          component: UsuarioEditar,
          props: true,
          name: 'editarUsuario'
        }
      ]
    },
    {
      path: '/redirecionar',
      redirect: '/'
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

/**
 * Chamado antes de entrar na rota de forma global
 */
router.beforeEach((to, from, next) => {
  console.log('~> Antes das rotas globais')
  next()
})

export default router