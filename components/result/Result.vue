<template>
  <div class="mt-5">
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
            class="col-12 col-sm-3 mb-4"
          >
            <div
              v-b-modal.poster
              class="card"
              @click="fetchDetail(data.imdbID)"
            >
              <b-img-lazy class="card-img-top" :src="data.Poster" />
            </div>
          </div>
          <b-modal id="poster" hide-footer hide-header>
            <!-- <pre>{{ detail }}</pre> -->
            <b-img-lazy :src="detail.Poster" alt="poster" />
          </b-modal>
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Error from '@/components/error/Error'
export default {
  components: {
    Error,
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
      errorMessage: 'search/GET_ERROR',
      loading: 'search/GET_LOADING',
      detail: 'movies/GET_DETAIL',
      poster: 'movies/GET_POSTER',
    }),
  },
  methods: {
    async fetchDetail(id) {
      await this.$store.dispatch('movies/getDetail', { i: id })
    },
    async showPoster(id) {
      await this.$store.dispatch('movies/getPoster', { i: id })
    },
  },
}
</script>

<style lang="scss">
.card {
  height: 375px;
  border: none;
  cursor: pointer;
}

.card-img-top {
  height: 100%;
  object-position: center;
}
</style>
