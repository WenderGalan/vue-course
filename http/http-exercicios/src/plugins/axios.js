import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = 'https://curso-vue-ff503.firebaseio.com/'
// axios.defaults.headers.common['Authorization'] = 'abc123'
// axios.defaults.headers.get['Authorization'] = 'application/json'

Vue.use({
  // eslint-disable-next-line
  install(vue) {
    // Vue.prototype.$http = axios
    Vue.prototype.$http = axios.create({
      baseURL: 'https://curso-vue-ff503.firebaseio.com/',
      headers: {
        // Manda somenta o header no get
        get: {
          'Authorization': 'abc123'
        }
      }
    })
    // Intercepta as requisições do axios
    Vue.prototype.$http.interceptors.request.use((config) => {
        // eslint-disable-next-line
        console.log('~> ', config.method)
        return config
      },
      (error) => Promise.reject(error))

    Vue.prototype.$http.interceptors.response.use((response) => {
        // const array = []
        // for (let chave in response.data) {
        //   array.push({
        //     id: chave,
        //     ...response.data[chave]
        //   })
        // }
        // response.data = array
        return response
      },
      (error) => Promise.reject(error))
  }
})