export const state = () => ({
  detail: {
    Title: null,
    Poster: null,
    imdbID: null,
    Year: null,
    Country: null,
    Genre: null,
    Plot: null,
  },
  poster: null,
})

export const getters = {
  GET_DETAIL(state) {
    return state.detail
  },
  GET_POSTER(state) {
    return state.poster
  },
}

export const mutations = {
  SET_DETAIL(state, context) {
    state.detail = { ...state.detail, ...context }
  },
  SET_POSTER(state, context) {
    state.poster = context
  },
}

export const actions = {
  async getDetail({ commit }, payload) {
    try {
      console.log(payload)
      const response = await this.$axios.$get(this.$config.baseUrl, {
        params: {
          apikey: this.$config.apiKey,
          ...payload,
        },
      })
      commit('SET_DETAIL', response)
    } catch (error) {
      return error.message
    }
  },
  async getPoster({ commit }, payload) {
    try {
      const response = await this.$axios.$get(this.$config.urlPoster, {
        params: {
          apikey: this.$config.apiKey,
          ...payload,
        },
      })
      commit('SET_POSTER', response)
    } catch (error) {
      return error.message
    }
  },
}
