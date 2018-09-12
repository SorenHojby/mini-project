<template>
 <div class="home">
   <hero />
   <div class="container">
    <hr class="mt-5 mb-5">
    <nav class="nav">
        <a class="nav-link active" href="#">Popular</a>
        <a class="nav-link" href="#">New Arrivals</a>
        <a class="nav-link" href="#">Best sellers</a>
        <a class="nav-link" href="#">Special offers</a>
        <a class="nav-link" href="#">Coming soon</a>
      </nav>

<div class="grid-container mt-3"> 
  <div :class="'item item' + index" v-for="(product,index) in products" v-if = "index < 6"  :key="product.id" @mouseover="showInfobox = product.id" @mouseout="showInfobox = null">
      <div class="pricetag" v-if="product.price_sale == false"><sup>&pound;</sup>{{ product.price_original }}</div>
      <div class="pricetag" v-else><del><sup>&pound;</sup>{{ product.price_original }}</del>&nbsp;&nbsp;<big><sup>&pound;</sup>{{ product.price_sale }}</big></div>
    <div :style="{ backgroundImage: 'url(/assets/images/products/' + product.id + '/standard/1.jpg)' }" class="image"></div>
          <div class="middle" v-show="showInfobox === product.id">
            <div class="thumbnails">
              <img :src="'/assets/images/products/' + product.id + '/thumbnails/' + image.thumbnail" v-for="(image,index) in product.images" v-if = "index < 3" :key="image.id" alt=""  />
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
                <div class="col">
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
  <hr class="mt-5 mb-5">
</div>
<div class="container-fluid">
<div class="row">
  <div class="col lookbook man" style="background-image:url('/assets/images/man.jpg');">1</div>
  <div class="col mr-4 ml-4 lookbook woman">2</div>
  <div class="col lookbook you">3</div>
</div>
</div>
  </div>
</template>

<script>
import axios from "axios";
import Hero from "@/components/Hero.vue";
export default {
  data() {
    return {
      showInfobox: null,
      products: null
    };
  },
  components: {
    Hero
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
<style lang="scss" scoped>
.lookbook {
  background: #f8f8f8;
  min-height: 250px;
  background-position: left center;
  background-size: fit;
  &.man {
    background-image: url("../assets/images/man.jpg");
  }
  &.women {
    background-image: url("../assets/images/woman.jpg");
  }
  &.you {
    background-image: url("../assets/images/you.jpg");
  }
}
.nav {
  .nav-link {
    font-family: "Montserrat-SemiBold", sans-serif;
    font-size: 13px;
    font-weight: 600;
    &.active,
    &:hover {
      font-family: "Montserrat-Bold", sans-serif;
      font-size: 13px;
      color: #00c8c8;
    }
  }
}
.grid-container {
  display: grid;
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  grid-template-areas:
    "item0 item1 item2 item2"
    "item3 item3 item2 item2"
    "item3 item3 item2 item2"
    "item3 item3 item4 item5";
}

.item {
  position: relative;
  width: 100%;

  .pricetag {
    font-family: "Montserrat-Light", sans-serif;
    position: absolute;
    top: 15px;
    float: left;
    left: 21px;
    z-index: 105;
    color: #9a9a9a;
  }
  .middle {
    transition: 0.5s ease;

    position: absolute;
    top: 0;
    left: 0;
    transform: translate(0px, 23px);
    -ms-transform: translate(0px, 23px);
    text-align: center;
    width: 100%;
    z-index: 110;
    text-align: right;

    .infoicon {
      display: block;
      z-index: 200;
      text-align: center;
      color: white;
      position: absolute;
      bottom: 25px;
      width: 100%;
      left: 0px;
      font-size: 20pt;
    }
    .fa-info-circle {
      color: #fff;
    }
    .fa-info-circle:hover {
      color: #00c8c8;
      cursor: pointer;
    }
    .thumbnails {
      float: right;
      color: white;
      font-size: 16px;
      padding: 16px 32px;
      z-index: 115;
      & img {
        margin-bottom: 10px;
        border: 1px solid white;
        display: block;
        width: 50px;
      }
    }
  }
  .infobox {
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.5);
    font-family: "Montserrat-Regular", sans-serif;
    background-color: #f8f8f8;
    position: absolute;
    margin-top: 0px;
    color: black;
    font-size: 16px;
    padding: 15px;
    z-index: 115;
    width: 100%;
    display: block;
    & h3 {
      text-align: left;
      font-size: 13px;
      font-family: "Montserrat-Regular", sans-serif;
      & .price {
        text-align: right;
      }
    }
    & p {
      font-size: 13px;
      text-align: left;
      font-family: "Montserrat-Regular", sans-serif;
    }
  }

  .image {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100%;
    display: block;
    width: 100% !important;
    height: 310px;
    transition: 0.5s ease;
    backface-visibility: hidden;
    position: relative;
    z-index: 50;
  }

  &:hover {
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.5);
  }
  a {
    &:hover {
      .circle {
        background-color: #019898;
        .fa-inverse {
          color: #fff;
        }
      }
    }
    .circle {
      display: inline-block;
      width: 30px;
      height: 30px;
      border-radius: 100%;
      color: #fff;
      background-color: #727272;
      text-align: center;
      line-height: 30px;
    }
  }
}
.item0 {
  grid-area: item0;
}
.item1 {
  grid-area: item1;
}
.item2 {
  grid-area: item2;
  .image {
    height: 450px;
  }
  .infobox {
    bottom: -88px;
  }
}
.item3 {
  grid-area: item3;
  .image {
    height: 450px;
  }
  .infobox {
    bottom: -88px;
  }
}
.item4 {
  grid-area: item4;
}
.item5 {
  grid-area: item5;
}
.item6 {
  grid-area: item6;
}
</style>