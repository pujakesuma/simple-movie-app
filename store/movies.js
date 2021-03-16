export const actions = {
  async fetchMovieTest() {
    const req = await this.$axios.$get('/movieapi/', {
      params: { apikey: this.$config.apiKey, s: 'batman' },
    })
    console.log('yes', req)
  },
}
