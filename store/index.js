export const state = () => ({
  token: null
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  clearToken(state, token) {
    state.token = null
  }
}

export const actions = {
  nuxtServerInit({dispatch}) { // is triggered when the server starts
    console.log('nuxtServerInit')
  },
  login({ commit }) {
    commit('setToken', 'truetoken')
  },
  logout({ commit }) {
    commit('clearToken')
  }
}

export const getters = {
  hasToken: state => !!state.token
}
