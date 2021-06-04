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
  loading: true,
})

export const getters = {
  GET_DETAIL(state) {
    return state.detail
  },
  GET_LOADING(state) {
    return state.loading
  },
  GET_POSTER(state) {
    return state.poster
  },
}

export const mutations = {
  SET_DETAIL(state, context) {
    state.detail = { ...state.detail, ...context }
  },
  SET_LOADING(state, context) {
    state.loading = context
  },
  SET_POSTER(state, context) {
    state.poster = context
  },
}

export const actions = {
  async getDetail({ commit }, payload) {
    try {
      commit('SET_LOADING', true)
      const response = await this.$axios.$get(this.$config.baseUrl, {
        params: {
          apikey: this.$config.apiKey,
          ...payload,
        },
      })
      commit('SET_DETAIL', response)
      commit('SET_LOADING', false)
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
