<template>
  <div class="product ">
      <div v-if="product">
        <div class="container-fluid product__banner">
          <div class="text-center pt-5">
            <h3 class="text-light pt-5 mt-5">Product&nbsp;<span>View</span></h3>
            <h2><span class="text-light">mens - casuals - hoodies &amp; sweatshirts - <span class="title">{{ product.title }}</span></span></h2>
          </div>
        </div>
        <div class="container pt-5 pb-5">
          <div class="row">
            <div class="col-md-5  col-sm-12">
              <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="d-block w-100" src="/assets/images/products/1/standard/1.jpg" alt="First slide">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="/assets/images/products/1/standard/2.jpg" alt="Second slide">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="/assets/images/products/1/standard/3.jpg" alt="Third slide">
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
              <i class="fas fa-angle-left  fa-3x"></i>
              </a>
              <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                <i class="fas fa-angle-right  fa-3x"></i>
              </a>
            </div>
            </div>
            <div class="col-md-7 productinfo  col-sm-12">
              <h1>{{ product.title }}</h1>
              <div class="row">
                <div class="col">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                  &nbsp; <a href="">3 Review(s)</a> | 
                  <a href="">Add a Review</a> | 
                  Share: 
                  <a href=""><i class="text-dark fab fa-facebook-f"></i></a>
                  <a href=""><i class="text-dark fab fa-twitter"></i></a>
                  <a href=""><i class="text-dark fab fa-google-plus-g"></i></a>
                  <a href=""><i class="text-dark fab fa-pinterest"></i></a>
                  <a href=""><i class="text-dark fab fa-instagram"></i></a>
                  <a href=""><i class="text-dark fa fa-envelope"></i></a>
                 
               </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class="pricetag" v-if="product.price_sale == false">
                    <sup>&pound;</sup>  {{ product.price_original }}
                  </div>
                  <div class="pricetag" v-else>
                    <del><sup>&pound;</sup>{{ product.price_original }}</del>
                    &nbsp;&nbsp;<big><sup>&pound;</sup>{{ product.price_sale }}</big>
                  </div>
                </div>
              </div>
              <div class="row pt-3">
                <div class="col"><span class="stock">Availability:</span>&nbsp;<span v-if="product.stock > 0">In Stock</span><span v-else>Out of Stock</span></div>
              </div>
              <div class="row">
                <div class="col"><span class="code">Product Code:</span>&nbsp;<span>#{{product.product_code}}</span></div>
              </div>
              <div class="row">
                <div class="col"><span class="tags">Tags:</span>&nbsp;<span v-for="tag in product.tags" :key="tag"><a href="#" class="taglink">{{ tag }}</a>,</span></div>
              </div>
              <div class="row pt-3">
                <div class="col">
                  {{ product.description.full }}
                  <br>
                  <ul class="pt-3 ml-4">
                    <li v-for="point in product.usp" :key="point">{{point}}</li>
                  </ul>
                </div>
               
              </div>
               <div class="row pt-3">
                  <div class="col">
                    <label>Color</label>
                    <select name="color"  class="form-control no-radius">
                      <option :value="color" v-for="color in product.colors" :key="color">{{ color }}</option>
                    </select>
                  </div>
                  <div class="col">
                    <label>Size</label> 
                    <select name="size"  class="form-control no-radius">
                      <option :value="size" v-for="size in product.sizes" :key="size">{{ size }}</option>
                    </select>
                  </div>
                  <div class="col">
                    <label>QTY</label> 
                   <input name="qty" type="number"  class="form-control no-radius" min="1" max="99" step="1" value="1">
                  </div>

                </div>
                <div class="row pt-3">
                  <div class="col">
                   <button name="submit" v-if="product.stock == 0" disabled class="btn-disabled btn-add-to-cart btn btn-block btn-outline-dark  no-radius"><i class=" fa fa-shopping-cart"></i> Out of Stock</button>
                    <button name="submit" v-if="product.stock != 0"  class=" btn-add-to-cart btn btn-block btn-outline-dark  no-radius"><i class=" fa fa-shopping-cart"></i> Add to cart</button>
                  </div>
                  <div class="col">
                   <button name="submit" class="btn-add-to-lookbook  btn btn-block btn-outline-dark no-radius"><i class="far fa-heart"></i> add to lookbook</button>
                  </div>
                </div>
                 <div class="row pt-3">
                  <div class="col">
                   <button name="submit"  class="btn-add-to-compare btn btn-block btn-outline-light no-radius"><i class="fas fa-expand-arrows-alt"></i> Add to compare</button>
                  </div>
                   <div class="col"></div>
                </div>
                
            </div>
          </div>
          <div class="row pt-3">
                  <div class="col">
                   <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item">
                      <a class="nav-link active no-radius" id="pills-desc-tab" data-toggle="pill" href="#pills-desc" role="tab" aria-controls="pills-desc" aria-selected="true">Description</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link no-radius" id="pills-video-tab" data-toggle="pill" href="#pills-video" role="tab" aria-controls="pills-video" aria-selected="false">Video</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link no-radius" id="pills-sizes-tab" data-toggle="pill" href="#pills-sizes" role="tab" aria-controls="pills-sizes" aria-selected="false">Sizes &amp; Specs</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link no-radius" id="pills-delivery-tab" data-toggle="pill" href="#pills-delivery" role="tab" aria-controls="pills-delivery" aria-selected="false">Delivery &amp; Returns</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link no-radius" id="pills-reviews-tab" data-toggle="pill" href="#pills-reviews" role="tab" aria-controls="pills-reviews" aria-selected="false">Reviews</a>
                    </li>
                  </ul>
                  <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-desc-tab">
                      <p><strong>Integer gravida enim nisl</strong></p>
                      <p>Integer gravida enim nisl, nec blandit tortor fermentum vitae. Maecenas aliquam ac magna at rutrum. Duis purus sem, ornare ac nulla nec, condimentum hendrerit risus. Praesent malesuada nibh a augue semper, nec vehicula nisi eleifend. Curabitur a neque consequat, porta mauris sed, scelerisque tortor. Nullam consequat consequat lacus, ut lobortis massa consectetur eget. Nullam ut pellentesque nulla. Nullam gravida ex vulputate viverra molestie. Duis vehicula accumsan mollis. Cras a tellus quis nibh interdum convallis sed dictum metus. Sed porta tincidunt augue, non viverra lorem euismod ut. Cras suscipit nunc sed elit rutrum faucibus. Sed in aliquam orci, eget venenatis augue.</p>
                    </div>
                    <div class="tab-pane fade" id="pills-video" role="tabpanel" aria-labelledby="pills-video-tab">
                       <p><strong>Lorem ipsum dolor sit amet consectetur adipisicing elit</strong></p>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis orci quis massa placerat mattis et in ante. Morbi iaculis, mauris eget posuere porttitor, diam leo ornare felis, quis vulputate odio mauris nec velit. Nam in tristique metus, quis sollicitudin tellus. Vestibulum in augue aliquam mauris gravida vestibulum. Morbi ullamcorper placerat nunc, at sollicitudin ante pulvinar et. Morbi consectetur dolor id ante placerat eleifend. Integer non egestas ante. Donec tristique, libero et porta ultrices, diam urna hendrerit velit, quis pulvinar lorem urna vitae justo. Nunc vehicula, turpis cursus vehicula porta, quam massa pulvinar mauris, non mattis sem libero a tortor. Nullam quis libero id felis rutrum fringilla. Nunc dapibus, mi at fermentum molestie, risus eros rutrum nulla, eu luctus orci augue id lorem. Vivamus sit amet aliquam sem. Vivamus fringilla, nisl at fermentum feugiat, nulla libero ullamcorper mi, eget mollis est felis a odio. Quisque ut dui posuere, vestibulum mi eget, mollis arcu.</p>
                                      </div>
                    <div class="tab-pane fade" id="pills-sizes" role="tabpanel" aria-labelledby="pills-sizes-tab"> 
                      <p><strong>Nulla vel ante ligula.</strong></p>
                      <p>Nulla vel ante ligula. Nullam scelerisque metus ex, eget vulputate est faucibus blandit. Sed ac turpis dui. Duis rhoncus nibh eget neque convallis viverra. Nam eget pretium enim. Maecenas semper sed purus sed placerat. Vestibulum ullamcorper, libero at pretium ultricies, lectus arcu aliquam ligula, non commodo erat mauris eget nunc. Praesent sagittis posuere tortor. Suspendisse potenti. Duis sit amet suscipit leo. Donec commodo, lacus ut malesuada tincidunt, sapien dolor pulvinar tortor, eget consectetur sem elit et tortor. Ut mollis porta sapien, id gravida erat tristique eu.</p>
                  </div>
                    <div class="tab-pane fade" id="pills-delivery" role="tabpanel" aria-labelledby="pills-delivery-tab">
                       <p><strong>Donec sit amet dolor id leo molestie tincidunt at id ex.</strong></p>
                      <p>Donec sit amet dolor id leo molestie tincidunt at id ex. Aliquam ligula justo, vulputate a est et, tristique vestibulum lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec sit amet gravida quam. Aliquam turpis ipsum, hendrerit ut placerat eu, ultricies vitae purus. Fusce vitae velit sed est placerat volutpat. Vestibulum rhoncus nibh a lacinia tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a porta nunc. Nullam fringilla felis vitae eros commodo euismod. Nulla convallis, enim fringilla molestie varius, libero nisl tempor ante, sollicitudin volutpat libero ex in enim. Donec volutpat dolor nisl, a dignissim metus laoreet non. Cras eget dapibus lacus. Aenean gravida tempor nisi, sit amet convallis dui sollicitudin id.</p>
                    </div>
                    <div class="tab-pane fade" id="pills-reviews" role="tabpanel" aria-labelledby="pills-reviews-tab"> 
                      <p><strong>Etiam mollis orci et mauris dignissim, non venenatis lectus dictum</strong></p>
                      <p>Etiam mollis orci et mauris dignissim, non venenatis lectus dictum. Fusce ut pharetra massa. Cras et libero et ipsum condimentum volutpat eu id dolor. Maecenas et libero mauris. Nam accumsan enim eget nisl porttitor, ac aliquet enim lacinia. Pellentesque ut volutpat tortor. Cras maximus metus vitae sem fringilla, et posuere quam sodales. In ultricies dui id sollicitudin semper. Duis vitae augue nulla. Donec convallis porttitor velit vitae suscipit. Suspendisse dapibus quam vitae dolor luctus luctus. Quisque a aliquam massa, et sagittis risus.</p>
                  </div>
                  </div>
                  </div>
                </div>
        </div>
        
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
          this.product = response.data[productId - 1];
        })
        .catch(error => console.log(error));
    }
  }
};
</script>