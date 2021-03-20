<template>
  <div class="bg-dark">
    <div class="container">
      <nuxt-link to="/" class="logo">
        <div class="text-primary">
          <span class="font-weight-bold text-light"> movie</span>wan
        </div>
      </nuxt-link>
      <Nuxt />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  font-size: 2.5rem;
  text-decoration: none;
}

@media screen and (max-width: 720px) {
  .logo {
    font-size: 2rem;
  }
}
</style>
