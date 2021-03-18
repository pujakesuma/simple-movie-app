<template>
  <b-modal id="poster" centered size="lg" hide-footer hide-header>
    <div class="d-flex">
      <div class="img-wrapper">
        <b-img-lazy
          :src="detail.Poster"
          blank-src="/img/error.svg"
          alt="poster"
        />
      </div>
      <div class="text-wrapper pl-3">
        <h2>
          {{ detail.Title }}
        </h2>
        <div class="d-flex text-secondary mb-1 mb-sm-2">
          <div class="mr-2">{{ detail.Year }}</div>
          <div>{{ detail.Country }}</div>
        </div>
        <div class="text-secondary">{{ detail.Genre }}</div>

        <p class="mb-0">{{ detail.Plot }}</p>
        <div class="text-right">
          <button
            class="btn btn-primary text-light"
            @click.prevent="toDetail(detail.imdbID)"
          >
            Show Detail
          </button>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      detail: 'movies/GET_DETAIL',
    }),
  },
  methods: {
    toDetail(id) {
      this.$router.push({ name: 'show', params: { id } })
    },
  },
}
</script>

<style lang="scss" scoped>
#poster .img-wrapper {
  height: 100%;
  width: 40%;
  overflow: hidden;
}

#poster .img-wrapper img {
  height: 100%;
  width: 100%;
  object-fit: contain;
  object-position: center;
}

#poster .text-wrapper {
  width: 60%;
}

@media screen and (max-width: 720px) {
  .text-wrapper h2 {
    font-size: 1.5rem;
  }
}
</style>
