<template>
  <div
    class="d-flex justify-content-center align-items-center flex-column"
    style="height: 100vh"
  >
    <div class="error-wrapper mb-4 mb-sm-0">
      <b-img-lazy src="/img/error.svg" alt="error" />
    </div>
    <div class="text-center">
      <h2 class="display-3 text-light font-weight-bold">
        {{ error.statusCode }}
      </h2>
      <h1 v-if="error.statusCode === 404" class="text-light">
        Halaman tidak ditemukan
      </h1>
      <h1 v-else>Terjadi kesalahan</h1>
      <NuxtLink class="font-weight-bold" to="/">
        Kembali ke Halaman Depan
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'error',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  }, // you can set a custom layout for the error page
}
</script>

<style scoped>
.error-wrapper {
  height: 220px;
  width: 250px;
  overflow: hidden;
}

.error-wrapper img {
  height: 100%;
  width: 100%;
  object-fit: contain;
  object-position: center;
}

@media screen and (max-width: 720px) {
  .error-wrapper {
    height: 120px;
    width: 150px;
  }
}
</style>
