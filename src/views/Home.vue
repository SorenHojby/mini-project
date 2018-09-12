<template>
 <div class=" home">
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
  <div :class="'item item' + index" v-for="(product,index) in products" v-if = "index < 6"  :key="product.id" @mouseover="showByIndex = product.id" @mouseout="showByIndex = null">
      <div class="pricetag"><sup>&pound;</sup>{{ product.price_original.toLocaleString() }}</div>
    <div :style="{ backgroundImage: 'url(/assets/images/products/' + product.id + '/standard/1.jpg)' }" class="image"></div>
          <div class="middle" v-show="showByIndex === product.id">
            <div class="thumbnails">
              <img :src="'/assets/images/products/' + product.id + '/thumbnails/'" alt="" width="50px"  />
            </div>
            <div class="infoicon"><a href=""><i class="fas fa-info-circle"></i></a></div>
            
        </div>
        <div class="infobox" v-show="showByIndex === product.id">
              <h3>Headline dkdkd <span class="price"><sup>&pound;</sup>{{ product.price_original}}</span></h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
  </div>
 
    
</div>
<hr class="mt-5 mb-5">
  </div>
<div class="container-fluid">
<div class="row">
  <div class="col " style="background:#f8f8f8;min-height:250px;"> 
  1
   
</div>
  <div class="col mr-4  ml-4" style="background:#f8f8f8;min-height:250px;">2</div>
  <div class="col" style="background:#f8f8f8;min-height:250px;">3</div>
</div>
</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      showByIndex: null,
      products: null,
      thumbnails: null
    };
  },
  mounted() {
    this.getData();
    this.getthumbnails();
  },
  methods: {
    getData() {
      axios
        .get("../json/products.json")
        .then(response => (this.products = response.data));
    },
    getthumbnails() {
      axios
        .get("../json/products.json")
        .then(response => (this.thumbnails = response.data));
       
    }
  }
};
</script>
<style lang="scss" scoped>
.nav {
  .nav-link {
    font-weight: 600;
    &.active,
    &:hover {
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
    font-family: "montserratregular", sans-serif;
    position: absolute;
    top: 15px;
    float: left;
    left: 15px;
    z-index: 105;
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
      text-align: center;
      color: white;
      position: absolute;
      bottom: -100px;
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
      }
    }
    
    }
    .infobox {
      box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.5);
      font-family: "montserratregular", sans-serif;
      opacity: 1;
      background-color: #f8f8f8;
      position: absolute;
      bottom: -108px;
      color: black;
      font-size: 16px;
      padding: 15px;
      z-index: 115;
      width: 100%;
      display: block;
      & h3 {
        text-align: left;
        font-size: 13px;
        font-family: "montserratregular", sans-serif;
        & .price {
          float: right;
        }
      }
      & p {
        font-size: 13px;
        text-align: left;
        font-family: "robotoregular", sans-serif;
      }
  }

  .image {
    background-position: center center;
    background-repeat: no-repeat;
    background-size:100%; 
    display: block;
    width: 100% !important;
    height: 310px;
    transition: 0.5s ease;
    backface-visibility: hidden;
    position: relative;
    z-index: 50;
  }
 

  &:hover .image {
    opacity: 1;

    z-index: 100;
  }

  &:hover {
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.5);
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
   .image{
    height:450px;
  }
  .infobox {
       bottom:-88px;
  }
}
.item3 {
  grid-area: item3;
   .image{
    height:450px;
  }
    .infobox {
       bottom:-88px;
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