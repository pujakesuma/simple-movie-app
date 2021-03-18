<template>
  <div class="mt-5">
    <form class="search-bar mb-3" @submit.prevent="searchMovie">
      <input
        v-model="keyword"
        class="form-input"
        type="text"
        placeholder="Do you have something in mind ?"
      />
      <i class="fas fa-search text-secondary" @click.prevent="searchMovie"></i>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: '',
    }
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
}
</style>
