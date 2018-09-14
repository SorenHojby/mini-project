<template>
  <div id="app">
    <Topbar />
    <Navbar />
    <router-view/>
    <Footer />
    <Bottom />
  </div>
</template>

<script>
import Topbar from "@/components/Topbar.vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Bottom from "@/components/Bottom.vue";

export default {
  components: {
    Topbar,
    Navbar,
    Footer,
    Bottom
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/scss.scss";
</style>
