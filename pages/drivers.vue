<template>
  <div class="container home">
    <CHeading as="h2" fontSize="2xl">{{page.title}}</CHeading>
    <CBox mt="4">
        <nuxt-content :document="page" />
    </CBox>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content("drivers").fetch();
    return { page };
  },
};
</script>

<style lang="scss" scoped>

</style>