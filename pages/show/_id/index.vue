<template>
  <div class="container detail pt-5" style="height: 100vh">
    <nuxt-link to="/" style="text-decoration: none">
      <div class="text-primary" style="font-size: 2.5rem">
        <span class="font-weight-bold text-light"> movie</span>wan
      </div>
    </nuxt-link>
    <div class="row mt-4">
      <div class="col-12 col-sm-4 align-items-center mb-4 mb-sm-0">
        <div class="img-wrapper">
          <b-img-lazy class="img" :src="detail.Poster" alt="poster" />
        </div>
      </div>
      <div class="col-12 col-sm-8">
        <div class="text-wrapper text-light">
          <h2 class="font-weight-bold">{{ detail.Title }}</h2>
          <div class="d-flex text-secondary mb-2">
            <div class="mr-2">{{ detail.Year }} |</div>
            <div class="mr-2">{{ detail.Country }} |</div>
            <div class="mr-2">{{ detail.Genre }}</div>
          </div>
          <p class="mb-0">{{ detail.Plot }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      detail: 'movies/GET_DETAIL',
    }),
  },
  async asyncData({ params, store, error }) {
    try {
      const response = await store.dispatch('movies/getDetail', {
        i: params.id,
      })
      return response
    } catch (err) {
      return error({
        message: err.message,
        statusCode: err.response.status,
      })
    }
  },
}
</script>

<style lang="scss">
.detail .img-wrapper {
  width: 100%;
  height: 500px;
  overflow: hidden;
}

.detail .img-wrapper .img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
}

@media screen and (max-width: 720px) {
  .detail .img-wrapper {
    height: 250px;
  }
}
</style>
