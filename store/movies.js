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
      console.log(payload)
      const req = await this.$axios.$get('/movieapi/', {
        params: { apikey: this.$config.apiKey, ...payload },
      })
      console.log(req)
      const { Response, Search, Error } = req
      if (Response === 'True') {
        commit('SET_SEARCH', Search)
      } else {
        console.log(Error)
      }
    } catch (error) {
      console.log(error)
    }
  },
}
