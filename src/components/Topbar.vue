<template>
<div class="topbar bg-dark text-light">
  <div class="container">
    <div class="row align-items-center">
      <div class="col">
        <nav class="nav">
        <div class="dropdown">
          <a href='#' class=" nav-link pt-2 pl-5 pr-0 pb-2"  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Currency: GBP
          </a>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">GBP</a>
            <a class="dropdown-item" href="#">EUR</a>
            <a class="dropdown-item" href="#">USD</a>
            <a class="dropdown-item" href="#">DKK</a>
          </div>
        </div>
        </nav>
      </div>
      <div class="col">
        <nav class="nav">
          <a class="nav-link pt-2 pl-3 pr-3 pb-2" href="#">Register</a>
          <a class="nav-link pt-2 pl-3 pr-3 pb-2" href="#">Sign In</a>
          <a class="nav-link pt-2 pl-5 pr-5 pb-2 cartlink" href="#"  id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-shopping-cart"></i>&nbsp; &nbsp; Empty&nbsp; &nbsp;<i class="fas fa-sort-down"></i></a> 
           <div class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
         <p class="text-center">Empty</p>
          </div>
        </nav>
      </div>
    </div>
  </div>
</div>
</template>
<script>
</script>
<style lang="scss">
.btnCurrencySelector {
  font-family: "Montserrat-Bold",sans-serif;
  font-size:13px;
  color: #bbb;
}
.nav-link {
  font-family: "Montserrat-Regular",sans-serif;
  font-size:13px;
  color: #bbb;
  &:hover {
    color: #fff;
  }
  &.cartlink {
    background-color: #00c8c8;
    color: #fff;

    &:hover {
      background-color: #00c8c8;
      color: #eee;
    }
  }
 .dropdown-item{
  font-size:13px;
  }
}
</style>

