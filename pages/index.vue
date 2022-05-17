<template>
  <div class="container home">
    <CHeading as="h2" fontSize="2xl">{{page.title}}</CHeading>
    <nuxt-content :document="page" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content("home").fetch();
    return { page };
  },
};
</script>

<style lang="scss" scoped>

</style>