<template>
          <div class="grid-container mt-3">
            <div :class="'item item' + index" v-for="(product,index) in products" v-if="index < 6" :key="product.id"
                 @mouseover="showInfobox = product.id" @mouseout="showInfobox = null">
                <div class="pricetag" v-if="product.price_sale == false"><sup>&pound;</sup>{{ product.price_original }}
                </div>
                <div class="pricetag" v-else>
                    <del><sup>&pound;</sup>{{ product.price_original }}</del>&nbsp;&nbsp;<big><sup>&pound;</sup>{{
                    product.price_sale }}</big></div>
                <div :style="{ backgroundImage: 'url(/assets/images/products/' + product.id + '/standard/1.jpg)' }"
                     class="image"></div>
                <div class="middle" v-show="showInfobox === product.id">
                    <div class="thumbnails">
                        <img :src="'/assets/images/products/' + product.id + '/thumbnails/' + image.thumbnail"
                             v-for="(image,index) in product.images" v-if="index < 3" :key="image.id" alt=""/>
                    </div>

                    <div class="infoicon">
                        <router-link :to="`/product/${product.id}`">
                            <i class="fas fa-info-circle"></i>
                        </router-link>
                    </div>

                </div>
                <div class="infobox" v-show="showInfobox === product.id">
                    <h3 class=" text-center">{{ product.title }}
                        <span class="price" v-if="product.price_sale == false"><sup>&pound;</sup>{{ product.price_original }}</span>
                        <span class="price" v-else><del><sup>&pound;</sup>{{ product.price_original }}</del>&nbsp;&nbsp;<big><sup>&pound;</sup>{{ product.price_sale }}</big></span>
                    </h3>
                    <p class=" text-center">{{ product.description.appetiser }}</p>

                    <div class="row">
                        <div class="col text-center">
                            <a href="#">
                                <div class="circle">
                                    <i class="fas fa-shopping-cart fa-inverse"></i>
                                </div>
                            </a>
                            &nbsp;

                            <a href="#">
                                <div class="circle">
                                    <i class="far fa-heart fa-inverse"></i>
                                </div>
                            </a>
                            &nbsp;

                            <a href="#">
                                <div class="circle">
                                    <i class="fas fa-expand fa-inverse"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      showInfobox: null,
      products: null
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get("../json/products.json")
        .then(response => (this.products = response.data));
    }
  }
};
</script>
