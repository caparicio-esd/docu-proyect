<template>
  <nav class="navigator">
      <div class="nav_item" v-for="(navItem, i) in menu" :key="i">
          <nuxt-link :to="navItem.route">{{navItem.title}}</nuxt-link>
      </div>
  </nav>
</template>

<script>
import menu from "@/content/menu"
export default {
  data() {
    return {
        menu: menu
    };
  },
};
</script>

<style>
.nuxt-link-exact-active {
    font-weight: bold;
}
</style>