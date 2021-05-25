import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null
  },
  mutations: {
    setToken(state, payload){
      state.token = payload
    }
  },
  actions: {
    async login({ commit }, user) {
      try {
        const res = await fetch('http://localhost:8005/api/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user)
        })
        const userDB = await res.json()
        commit('setToken', userDB.data.token)
        localStorage.setItem('token', userDB.data.token)
      } catch (error) {
        console.log('Error: ', error)
      }
    },
    getToken({commit}) {
      if(localStorage.getItem('token')) {
        commit('setToken', localStorage.getItem('token'))
      } else {
        commit('setToken', null)
      }
    }
  },
  modules: {
  }
})
