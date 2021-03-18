<template>
  <div class="container pt-5" style="min-height: 100vh; width: 100%">
    <h1 class="text-primary">
      <span class="font-weight-bold text-light"> Mola TV </span>kw 1
    </h1>
    <search />
    <div class="row mt-5">
      <div
        v-for="(data, i) in searchResult"
        :key="i"
        class="col-12 col-sm-3 mb-4"
      >
        <div class="card">
          <b-img-lazy class="card-img-top" :src="data.Poster" />
          <!-- <div class="card-body">
            <p class="">
              {{ data.Title }}
            </p>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Search from '@/components/search/Search'
export default {
  components: {
    Search,
  },
  computed: {
    ...mapGetters({
      searchResult: 'movies/GET_SEARCH',
    }),
  },
  mounted() {
    this.$store.dispatch('movies/fetchMovieTest', { s: 'godfather' })
  },
}
</script>

<style lang="scss">
.card {
  height: 375px;
  border: none;
}

.card-img-top {
  height: 100%;
  object-position: center;
}
</style>
