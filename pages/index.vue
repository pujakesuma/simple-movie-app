<template>
  <div class="pt-3 pt-sm-5" style="min-height: 100vh; width: 100%">
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
  data() {
    return {
      button: 'button',
    }
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
.logo {
  font-size: 2.5rem;
}

.card {
  height: 375px;
  border: none;
}

.card-img-top {
  height: 100%;
  object-position: center;
}
</style>
