<template>
     <form
  id="registerForm"
  @submit="validateForm"
  action=""
  method="post"
>

  <div v-if="reg_errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in reg_errors" :key="error">{{ error }}</li>
    </ul>
  </div>

 <div class="form-group">
    <label for="email">Email</label>
    <input
      id="reg_email"
      v-model="email"
      type="text"
      name="email"
      class="form-control"
    ></div>
 <div class="form-group">
    <label for="name">Password</label>
    <input
      id="reg_password"
      v-model="password"
      type="password"
      name="password"
      class="form-control"
    >
    </div>
<div class="form-group">
    <label for="name">Confirm Password</label>
    <input
      id="password2"
      v-model="password2"
      type="password"
      name="password2"
      class="form-control"
    >
</div>
<div class="form-group form-check">
<input
      id="agree"
      v-model="agree"
      type="checkbox"
      name="agree"
      value="1"
      class="form-check-input"
    > 
       <label class="form-check-label" for="exampleCheck1">Please accept rules</label>
</div>

                <button
                type="submit"
                value="Submit"
                class="btn btn-sucess"
                >Create Account</button>
          
 

</form>
</template>
<script>
export default {
  data() {
    return {
      reg_errors: [],
      email: null,
      password: null,
      password2: null,
      agree: null
    };
  },
  methods: {
    validateForm: function(e) {
      if (
        this.email &&
        this.password &&
        this.password2 &&
        this.password == this.password2 &&
        this.agree == true
      ) {
        return true;
      }

      this.reg_errors = [];

      if (!this.email) {
        this.reg_errors.push("Email required.");
      } else if (!this.validEmail(this.email)) {
        this.reg_errors.push("Valid email required.");
      }

      if (this.password != this.password2) {
        this.reg_errors.push("Password does not match.");
      }

      if (!this.password) {
        this.reg_errors.push("Password required.");
      }

      if (!this.password2) {
        this.reg_errors.push("Confirm Password required.");
      }

      if (this.agree == false || this.agree == null) {
        this.reg_errors.push("Accept aggreement is required.");
      }

      e.preventDefault();
    },

    validEmail: function(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
};
</script>
