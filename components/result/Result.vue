<template>
  <div class="mt-5 result">
    <div v-if="loading" class="text-center">
      <b-spinner
        v-for="i in 3"
        :key="i"
        variant="primary"
        type="grow"
        label="Spinning"
        class="mr-2"
      ></b-spinner>
    </div>
    <div v-else>
      <template v-if="searchResult">
        <div class="row">
          <div
            v-for="(data, i) in searchResult"
            :key="i"
            class="col-6 col-sm-3 mb-4"
          >
            <div
              v-b-modal.poster
              class="card"
              @click="fetchDetail(data.imdbID)"
            >
              <b-img-lazy class="card-img-top" :src="data.Poster" />
            </div>
          </div>
          <modal />
        </div>
      </template>
      <template v-else>
        <error>
          <template #error-message>
            <div class="text-light" style="font-size: 1.5rem">
              Oops, {{ errorMessage }}
            </div>
            <p class="text-secondary">Try different Keyword</p>
          </template>
        </error>
      </template>
    </div>
    <div v-if="loadingMore" class="text-center mt-4">
      <b-spinner
        v-for="i in 3"
        :key="i"
        variant="primary"
        type="grow"
        label="Spinning"
        class="mr-2 my-4"
      ></b-spinner>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Error from '@/components/error/Error'
import Modal from '@/components/modal/Modal'
export default {
  components: {
    Error,
    Modal,
  },
  props: {
    result: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    ...mapGetters({
      searchResult: 'search/GET_SEARCH',
      searchValue: 'search/GET_SEARCH_VALUE',
      errorMessage: 'search/GET_ERROR',
      loading: 'search/GET_LOADING',
      loadingMore: 'search/GET_LOADING_MORE',
      stop: 'search/GET_STOP',
      detail: 'movies/GET_DETAIL',
      poster: 'movies/GET_POSTER',
    }),
  },
  mounted() {
    window.onscroll = () => this.scroll()
    document.body.ontouchmove = () => this.scroll()
  },
  methods: {
    async fetchDetail(id) {
      await this.$store.dispatch('movies/getDetail', { i: id })
    },
    async showPoster(id) {
      await this.$store.dispatch('movies/getPoster', { i: id })
    },
    searchMovie(type) {
      this.$store.dispatch('search/searchMovie', {
        s: this.searchValue,
        type,
      })
    },
    scroll() {
      const height = (
        document.documentElement.scrollTop + window.innerHeight
      ).toFixed(0)

      const bottomOfWindow =
        Number(height) === document.documentElement.offsetHeight

      if (!this.stop && bottomOfWindow) {
        this.searchMovie('load_more')
      }
    },
  },
}
</script>

<style lang="scss">
.result .card {
  height: 375px;
  border: none;
  cursor: pointer;
}

.card-img-top {
  height: 100%;
  object-position: center;
}

@media screen and (max-width: 720px) {
  .result .card {
    height: 250px;
  }
}
</style>
