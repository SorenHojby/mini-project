<template>
  <div class="product">
      <div v-if="product">
    <h1>This is an product info page</h1>
  <h2>{{ product.title }}</h2>
  </div>
  <div v-else>
    <h1>No product found</h1>
  </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      product: null
    };
  },
  mounted() {
    this.getProductByID();
  },
  methods: {
    getProductByID() {
      let productId = this.$route.params.id;
      axios
        .get("../json/products.json")
        .then(response => {
          this.product = response.data[productId];
          console.log(this.product);
        })
        .catch(error => console.log(error));
    }
  }
};
</script>