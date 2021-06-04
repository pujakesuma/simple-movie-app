export const state = () => ({
  result: null,
  page: 1,
  error: null,
  loading: true,
  loadingMore: false,
  search: '',
  stop: false,
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
  GET_LOADING_MORE(state) {
    return state.loadingMore
  },
  GET_SEARCH_VALUE(state) {
    return state.search
  },
  GET_STOP(state) {
    return state.stop
  },
}

export const mutations = {
  SET_SEARCH(state, context) {
    state.result = context
  },
  SET_SEARCH_VALUE(state, context) {
    const { value, page } = context
    state.search = value
    page && (state.page = page)
  },
  PUSH_SEARCH(state, context) {
    state.result = [...state.result, ...context]
  },
  SET_ERROR(state, context) {
    state.error = context
    state.result = null
  },
  SET_LOADING(state, context) {
    state.loading = context
  },
  SET_LOADING_MORE(state, context) {
    state.loadingMore = context
  },
  SET_STOP(state, context) {
    state.stop = context
  },
  SET_PAGINATION(state, context) {
    context ? (state.page = 1) : state.page++
  },
}

export const actions = {
  async searchMovie({ commit, state }, payload) {
    const { type, ...params } = payload
    try {
      commit(`SET_LOADING${type === 'load_more' ? '_MORE' : ''}`, true)
      commit('SET_PAGINATION', type !== 'load_more')
      type !== 'load_more' && commit('SET_STOP', false)
      const req = await this.$axios.$get(this.$config.baseUrl, {
        params: {
          apikey: this.$config.apiKey,
          ...params,
          page: state.page,
        },
      })
      const { Response, Search, Error } = req
      if (Response === 'True') {
        type === 'load_more'
          ? commit('PUSH_SEARCH', Search)
          : commit('SET_SEARCH', Search)
      } else {
        type === 'load_more'
          ? commit('SET_STOP', true)
          : commit('SET_ERROR', Error)
      }
      commit(`SET_LOADING${type === 'load_more' ? '_MORE' : ''}`, false)
    } catch (error) {
      return error.message
    }
  },
}
