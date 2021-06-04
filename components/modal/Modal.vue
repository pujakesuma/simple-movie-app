<template>
  <b-modal
    id="poster"
    centered
    size="md"
    hide-footer
    hide-header
    lazy
    body-class="p-0"
  >
    <div
      v-if="loading"
      class="d-flex justify-content-center align-items-center loading-wrapper"
    >
      <div>
        <b-spinner
          v-for="i in 3"
          :key="i"
          variant="primary"
          type="grow"
          label="Spinning"
          class="mr-2"
        ></b-spinner>
      </div>
    </div>
    <template v-else>
      <div class="img-poster">
        <b-img-lazy
          :src="detail.Poster"
          blank-src="/img/preloader.gif"
          alt="poster"
        />
      </div>
      <div class="row">
        <div class="col-5 pr-0">
          <div class="img-wrapper">
            <b-img-lazy
              :src="detail.Poster"
              blank-src="/img/preloader.gif"
              alt="poster"
            />
          </div>
        </div>
        <div class="col-7 pl-0">
          <div class="text-wrapper">
            <h2>
              {{ detail.Title }}
            </h2>
            <div class="d-flex text-secondary mb-2">
              <div class="mr-2">{{ detail.Year }}</div>
              <span class="mr-2">&#183;</span>
              <div>{{ detail.Genre }}</div>
            </div>
            <div>
              <nuxt-link :to="{ name: 'show', params: { id: detail.imdbID } }">
                Read More
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </template>
  </b-modal>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      detail: 'movies/GET_DETAIL',
      loading: 'movies/GET_LOADING',
    }),
  },
}
</script>

<style lang="scss" scoped>
#poster .loading-wrapper {
  height: 400px;
  width: 100%;
  overflow: hidden;
}

#poster .img-poster {
  height: 300px;
  width: 100%;
  overflow: hidden;
}

#poster .img-poster img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

#poster .img-wrapper {
  height: 200px;
  width: 100%;
  overflow: hidden;
  margin-top: -6rem;
}

#poster .img-wrapper img {
  height: 100%;
  width: 100%;
  object-fit: contain;
  object-position: center;
}

#poster .text-wrapper {
  width: 100%;
  padding: 1rem 1rem 1rem 0;
}

@media screen and (max-width: 720px) {
  #poster .loading-wrapper {
    height: 300px;
    width: 100%;
    overflow: hidden;
  }

  .text-wrapper h2 {
    font-size: 1.2rem;
  }

  #poster .img-poster {
    height: 200px;
  }

  #poster .img-wrapper {
    height: 180px;
  }
}
</style>
