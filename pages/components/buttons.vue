<template>
  <div class="container home">
    <nuxt-content :document="page" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content("components/buttons").fetch();
    return { page };
  },
};
</script>

<style lang="scss" scoped>
.home {
  background: $hola;
}
</style>