<template>
      <form
  id="signinForm"
  @submit="checkForm"
  action=""
  method="post"
>

  <div v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
  </div>
<div class="form-group">
    <label for="email">Email</label>
    <input
      id="email"
      v-model="email"
      type="text"
      name="email"
      class="form-control"
    ></div>
<div class="form-group">
    <label for="name">Password</label>
    <input
      id="password"
      v-model="password"
      type="password"
      name="password"
      class="form-control"
    >
</div>
    <div class="row">
        <div class="col">
            <button
            type="submit"
            value="Submit"
            class="btn btn-sucess"
            >Login</button>
        </div>
        <div class="col">
            <a href="#" class="text-dark"> Forgot your Password <i class="fas text-dark fa-long-arrow-alt-right"></i></a>
        </div>
    </div>


</form>
</template>
<script>
export default {
  data() {
    return {
      errors: [],
      email: null,
      password: null
    };
  },
  methods: {
    checkForm: function(e) {
      if (this.email && this.password) {
        return true;
      }

      this.errors = [];

      if (!this.email) {
        this.errors.push("Email required.");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("Valid email required.");
      }

      if (!this.password) {
        this.errors.push("Password required.");
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
