<template>
  <div class="mt-5">
    <form class="search-bar mb-3" @submit.prevent>
      <input
        class="form-input"
        type="text"
        placeholder="Mau Cari apa Hayo ?"
        aria-label="Search"
      />
      <i class="fas fa-search text-secondary" aria-hidden="true"></i>
    </form>
  </div>
</template>

<script>
export default {}
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
}

.search-bar input.form-input[type='text']:focus:not([readonly]) {
  // border-bottom: 1px solid#f4a261;
  box-shadow: none;
  background-color: #454849;
  color: #fff;
  outline: none;
}
.search-bar input.form-input[type='text'] {
  // border-bottom: 1px solid#f4a261;
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
