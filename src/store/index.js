import Vue from 'vue'
import Vuex from 'vuex'
import md5 from 'md5'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: ''
  },
  mutations: {
    setToken(state, payload) {
      state.token = md5(payload.token,'lnnykj')
    }
  },
  actions: {
    asyncSetToken(context, payload) {
      context.commit('setToken', payload)
    }
  },
  modules: {
  }
})
