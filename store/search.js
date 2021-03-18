export const state = () => ({
  result: null,
  error: null,
  loading: true,
})

export const getters = {
  GET_SEARCH(state) {
    return state.result
  },
  GET_ERROR(state) {
    return state.error
  },
  GET_LOADING(state) {
    return state.loading
  },
}

export const mutations = {
  SET_SEARCH(state, context) {
    state.result = context
  },

  SET_ERROR(state, context) {
    state.error = context
    state.result = null
  },
  SET_LOADING(state, context) {
    state.loading = context
  },
}

export const actions = {
  async searchMovie({ commit }, payload) {
    try {
      commit('SET_LOADING', true)
      const req = await this.$axios.$get(this.$config.baseUrl, {
        params: {
          apikey: this.$config.apiKey,
          ...payload,
        },
      })
      const { Response, Search, Error } = req
      if (Response === 'True') {
        commit('SET_SEARCH', Search)
        commit('SET_LOADING', false)
      } else {
        commit('SET_ERROR', Error)
        commit('SET_LOADING', false)
      }
    } catch (error) {
      return error.message
    }
  },
}
