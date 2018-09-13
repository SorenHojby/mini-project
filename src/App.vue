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
body {
  background: white !important;
}

hr {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  background: #eeeeee;
  height: 2px;
  border: none;
}

* {
  margin: 0px;
  padding: 0px;
}
/*
 * Custom translucent site header
 */

.site-header {
  background-color: rgba(0, 0, 0, 0.85);
}
.site-header a {
  color: #999;
  transition: ease-in-out color 0.15s;
}
.site-header a:hover {
  color: #fff;
  text-decoration: none;
}
.no-radius {
  border-radius: 0px !important;
}
/*
 * Dummy devices (replace them with your own or something else entirely!)
 */

.product-device {
  position: absolute;
  right: 10%;
  bottom: -30%;
  width: 300px;
  height: 540px;
  background-color: #333;
  border-radius: 21px;
  -webkit-transform: rotate(30deg);
  transform: rotate(30deg);
}

.product-device::before {
  position: absolute;
  top: 10%;
  right: 10px;
  bottom: 10%;
  left: 10px;
  content: "";
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
}

.product-device-2 {
  top: -25%;
  right: auto;
  bottom: 0;
  left: 5%;
  background-color: #e5e5e5;
}

/*
 * Extra utilities
 */

.flex-equal > * {
  -ms-flex: 1;
  flex: 1;
}
@media (min-width: 768px) {
  .flex-md-equal > * {
    -ms-flex: 1;
    flex: 1;
  }
}

.overflow-hidden {
  overflow: hidden;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
