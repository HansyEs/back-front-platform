<template>
  <div id="login-view" class="container-fluid">

    <h2 class="mb-m">Login</h2>
  
    <form class="" @submit.prevent="login">
      <label><input class="form-control" v-model="email" placeholder="email"></label>
      <label><input class="form-control" v-model="password" placeholder="password = p" type="password"></label><br>
      <div class="text-center mt-m">
        <button class="btn btn-primary" type="submit">login</button>
      </div>
      <div class="text-right mt-m">
        <a href="">Forgot your password?</a>
      </div>
    </form>

    <div class="col-sm-12 mt-m text-center feedback">
      <p v-if="$route.query.redirect" class="message warning">You need to login first!</p>
      <p v-if="error" class="message error">Bad login information!</p>
    </div>
    
  </div>
</template>

<script>

export default {

  name: "Login",

  data () {
    return {
      email: 'joe@example.com',
      password: '',
      error: false
    }
  },

  created: function(){

    //console.log('[COMP CREATED]::LOGIN');

  },

  methods: {
    login () {

      //console.log("dispatching");
      var e = this.email;
      var p = this.password;
      var eTest = "joe@example.com";
      var pTest = "p";
      console.log(e,p,eTest,pTest);

      if( e === eTest && p === pTest ){ // => for prototype purposes

        this.$store.dispatch("auth/login", {
          email: this.email,
          password: this.password
        }).then(() => {
          console.log("login resolved");
          this.$router.replace(this.$route.query.redirect || '/')
          // If there is no redirect url send them to => '/'
        });

      } else {
        // TO DO => make it real
        // console.log("ERROR :: TO DO => style error message");
        this.error = true // => show error
      }

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- If not used please comment -->
<!--
<style lang="scss" scoped>
</style>
-->