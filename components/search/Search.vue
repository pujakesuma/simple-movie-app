<template>
  <div class="mt-4">
    <form class="search-bar mb-3" @submit.prevent="searchMovie">
      <input
        v-model="keyword"
        class="form-input"
        type="text"
        placeholder="Looking for something ?"
      />
      <i class="fas fa-search text-secondary" @click.prevent="searchMovie"></i>
    </form>
  </div>
</template>

<script>
export default {
  computed: {
    keyword: {
      get() {
        return this.$store.state.search.search
      },
      set(value) {
        this.$store.commit('search/SET_SEARCH_VALUE', { value, page: 1 })
      },
    },
  },
  methods: {
    searchMovie() {
      this.$store.dispatch('search/searchMovie', { s: this.keyword })
    },
  },
}
</script>

<style lang="scss" scoped>
.search-bar {
  position: relative;
  width: 80%;
  margin: 0 auto;
}
.search-bar i {
  position: absolute;
  top: 38%;
  right: 1rem;
  display: block;
  cursor: pointer;
}

.search-bar input.form-input[type='text']:focus:not([readonly]) {
  box-shadow: none;
  background-color: #454849;
  color: #fff;
  outline: none;
}
.search-bar input.form-input[type='text'] {
  box-shadow: none;
  background-color: #454849;
  outline: none;
}

.form-input {
  border: none;
  border-radius: 0;
  background-color: #454849;
  color: #fff;
  padding: 1rem 5rem 1rem 1rem;
  width: 100%;
  border-radius: 0.5rem;
}

@media screen and (max-width: 720px) {
  .search-bar {
    width: 95%;
  }
}
</style>
