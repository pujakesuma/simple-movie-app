export const state = {
  result: null,
}

export const getters = {
  GET_SEARCH(state) {
    return state.result
  },
}

export const mutations = {
  SET_SEARCH(state, context) {
    state.result = context
  },
}

export const actions = {
  async fetchMovieTest({ commit }, payload) {
    try {
      const req = await this.$axios.$get('/movieapi/', {
        params: { apikey: this.$config.apiKey, ...payload },
      })
      const { Response, Search, Error } = req
      if (Response === 'True') {
        commit('SET_SEARCH', Search)
      } else {
        return Error
      }
    } catch (error) {
      return error.message
    }
  },
}
