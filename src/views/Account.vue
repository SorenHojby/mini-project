<template>
    <div class="account">
        <div class="container-fluid account__banner">
            <div class="text-center pt-5">
                <h3 class="text-light pt-5 mt-5">Welcome&nbsp;<span>To Ave</span></h3>
                <h2><span class="text-light">Sign in or Register</span></h2>
            </div>
        </div>
        <div class="container">
            <div class="row pt-5 pb-5">
                <div class="col">
                    <h4>Sign In</h4>
                  <Signin />
                </div>
                <div class="col">
                    <h4>Register</h4>
                    <Register />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Register from "@/components/Register.vue";
import Signin from "@/components/Sign-in.vue";
export default {
  components: {
    Register,
    Signin
  }
};
</script>

