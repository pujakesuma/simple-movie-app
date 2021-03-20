<template>
  <b-modal
    id="poster"
    centered
    size="md"
    hide-footer
    hide-header
    body-class="p-0"
  >
    <div class="img-poster">
      <b-img-lazy
        :src="detail.Poster"
        blank-src="/img/error.svg"
        alt="poster"
      />
    </div>
    <div class="row">
      <div class="col-5 pr-0">
        <div class="img-wrapper">
          <b-img-lazy
            :src="detail.Poster"
            blank-src="/img/error.svg"
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
            <!-- <button
              class="btn btn-primary text-light btn-sm"
              @click.prevent="toDetail(detail.imdbID)"
            >
              Read More
            </button> -->
            <nuxt-link :to="{ name: 'show', params: { id: detail.imdbID } }">
              Read More
            </nuxt-link>
          </div>
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
}
</script>

<style lang="scss" scoped>
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
