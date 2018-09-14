<template>
<div class="home">
    <Hero/>
    <div class="container">
        <hr class="mt-5 mb-5">
        <ProductListFilter />
        <ProductList />
        <hr class="mt-5 mb-5">
    </div>
    <Lookbook />
</div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import ProductListFilter from "@/components/ProductListFilter.vue";
import ProductList from "@/components/ProductList.vue";
import Lookbook from "@/components/Lookbook.vue";
export default {
  components: {
    Hero,
    ProductListFilter,
    ProductList,
    Lookbook
  }
};
</script>