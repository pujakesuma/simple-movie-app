<template>
  <div class="d-flex justify-content-center align-items-center flex-column">
    <slot name="error-message" />
    <div class="error-wrapper">
      <b-img-lazy src="/img/error.svg" alt="error" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
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
