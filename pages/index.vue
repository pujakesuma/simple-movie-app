<template>
  <div class="container pt-5" style="min-height: 100vh; width: 100%">
    <h1 class="text-primary">
      <span class="font-weight-bold text-light"> Mola TV </span>kw 1
    </h1>
    <search />
    <result />
  </div>
</template>

<script>
import Search from '@/components/search/Search'
import Result from '@/components/result/Result'
export default {
  components: {
    Search,
    Result,
  },
  async asyncData({ store, error }) {
    try {
      const req = await store.dispatch('search/searchMovie', {
        s: 'godfather',
      })
      return req
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
.card {
  height: 375px;
  border: none;
}

.card-img-top {
  height: 100%;
  object-position: center;
}
</style>
