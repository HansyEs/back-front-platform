<template>

  <div id="app" class="talentooAdmin" v-bind:class="{ loginView: !isLoggedIn }">

    <!-- TO DO => if(user.auth()) -> v-if -->
    <navbar></navbar>

    <div class="content-wrapper">
  
      <!-- the router outlet, where all matched components would be viewed -->
      <router-view/>

      <app-footer></app-footer>

    </div>
    <!-- END TO DO => if(user.auth()) -->

    <!-- TO DO => if(!user.auth()) -> v-if -->

      <!-- Login.vue 
      <div class="container" id="login">
        login form
      </div>
      -->

    <!-- END TO DO => if(!user.auth()) -->

  </div>

</template>

<script>

export default {

  name: 'app',

  data() {
    return {
    }
  },

  computed: {
    /*
    isLoggedIn() {
      var getterAuthState = this.$store.state.auth.isLoggedIn;
      //console.log(this.$store.state.auth.isLoggedIn)
      return getterAuthState;
    }
    */
    isLoggedIn: function () {
      var getterAuthState = this.$store.state.auth.isLoggedIn;
      //console.log(this.$store.state.auth.isLoggedIn)
      return getterAuthState;
    }
  },

  created: function(){

  }

}

</script>

<style lang="scss">
  @import 'custom.scss';
</style>
