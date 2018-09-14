<template>
<nav class="navbar navbar-expand-lg ">
  <a class="navbar-brand" href="/"><img src="@/assets/images/logo/logo.svg" alt="test"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navigation">
    <ul class="navbar-nav mr-auto"></ul>
       <ul class="navbar-nav ml-md-auto" >
        <li class="nav-item  dropdown">
             <a href="#" class="nav-link  dropdown-toggle" data-toggle="dropdown"> Mens</a>
             <ul class="dropdown-menu multi-column columns-2">
              <div class="row">
               <div class="col-md-6 col-sm-12">
                <h6 class="dropdown-header">Casual</h6>
                <a class="dropdown-item" href="#">Jackets</a>
                <a class="dropdown-item" href="#">Hoodies &amp; Sweatshirts</a>
                <a class="dropdown-item" href="#">Polo Shirts</a>
                <a class="dropdown-item" href="#">Sportswear</a>
                <a class="dropdown-item" href="#">Trousers &amp; Chinos</a>
                <a class="dropdown-item" href="#">T-Shirts</a>
               </div>
               <div class="col-md-6 col-sm-12">
                <h6 class="dropdown-header">Formal</h6>
                <a class="dropdown-item" href="#">Jackets</a>
                <a class="dropdown-item" href="#">Shirts</a>
                <a class="dropdown-item" href="#">Suits</a>
                <a class="dropdown-item" href="#">Trousers</a>
               </div>
              </div>
             </ul>
         </li>
            <li class="nav-item  dropdown" >
             <a href="#" class="nav-link  dropdown-toggle" data-toggle="dropdown"> Womens</a>
             <ul class="dropdown-menu multi-column columns-2">
              <div class="row">
               <div class="col-md-6 col-sm-12">
                <h6 class="dropdown-header">Casual</h6>
                <a class="dropdown-item" href="#">Jackets</a>
                <a class="dropdown-item" href="#">Hoodies &amp; Sweatshirts</a>
                <a class="dropdown-item" href="#">Polo Shirts</a>
                <a class="dropdown-item" href="#">Sportswear</a>
                <a class="dropdown-item" href="#">Trousers &amp; Chinos</a>
                <a class="dropdown-item" href="#">T-Shirts</a>
               </div>
               <div class="col-md-6 col-sm-12">
                <h6 class="dropdown-header">Formal</h6>
                <a class="dropdown-item" href="#">Jackets</a>
                <a class="dropdown-item" href="#">Shirts</a>
                <a class="dropdown-item" href="#">Suits</a>
                <a class="dropdown-item" href="#">Trousers</a>
               </div>
              </div>
             </ul>
         </li>
      <li class="nav-item ">
        <a class="nav-link" href="/brand" role="button">The brand</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Local Stores</a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown3">
          <a class="dropdown-item" href="#">Link 1</a>
          <a class="dropdown-item" href="#">Link 2</a>
        </div>
      </li>
     <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown4" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Look Book</a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown4">
          <a class="dropdown-item" href="#">Link 1</a>
          <a class="dropdown-item" href="#">Link 2</a>
        </div>
      </li>
    </ul>
     <form class="ml-md-auto form-inline">
        <div class="input-group">
            <input type="text" name="search" class="searchfield form-control" placeholder="Search.." >
            <i class="fas fa-search"></i>
        </div>
    </form>
  </div> 
</nav>
</template>
