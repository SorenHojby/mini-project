<template>
<nav class="navbar navbar-expand-lg ">
  <a class="navbar-brand" href="#"><img src="@/assets/images/logo/logo.svg" width="245" alt="test"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
      
    <ul class="navbar-nav mr-auto">
      
    </ul>
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
        <a class="nav-link" href="#" role="button">
          The brand
        </a>
        
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Local Stores
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown3">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
     <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown4" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Look Book
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown4">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
     <form class=".ml-md-auto form-inline">
        <div class="input-group">
            <input type="text" name="search" class="searchfield form-control" placeholder="Search..." >
            <i class="fas fa-search"></i>
        </div>
    </form>
  </div> 
</nav>
</template>
<style lang="scss" scoped>
nav{
    
    z-index:100;
}
.navbar-light{
    background-color:transparent !important;
}
.nav-item{
    color:black;
    .nav-link{
        color:black !important;
      
    }
    h6{
         color:black !important;
         font-weight:700;
    }
}
.navbar-brand {
  margin-left: 150px;
}
.form-inline {
  margin-right: 150px;
  margin-left: 50px;
}

.searchfield {
  border: none;
  background-color: transparent;
  z-index: 10;
}
input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}

.fa-search {
  position: relative;
  top: 10px;
  left: -25px;
  color: gray;
  z-index: 100;
}
.dropdown-menu {
    border: none !important;
    box-shadow: 0px 15px 15px 0px rgba(0,0,0,0.5) ;
  min-width: 200px;
}
.dropdown-menu.columns-2 {
  min-width: 400px;
}
.dropdown-menu li a {
  padding: 5px 15px;
  font-weight: 300;
}

@media (max-width: 767px) {
  .dropdown-menu.multi-column {
    min-width: 240px !important;
    overflow-x: hidden;
  }
}
</style>