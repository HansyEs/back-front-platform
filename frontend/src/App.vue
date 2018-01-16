<template>

  <div id="app" class="talentooAdmin" >

    <!-- TO DO => if(user.auth()) -->

    <div class="container" style="display:none;">
      <!-- Router link for SPA not refreshing -->
      <router-link to="/">Home</router-link>
      <router-link to="/profile">Profile</router-link>
      <router-link to="/organization">Organization</router-link>
    </div>

    <navbar></navbar>

    <div class="content-wrapper">
  
      <!-- the router outlet, where all matched components would be viewed -->
      <router-view/>

      <app-footer></app-footer>

    </div>

    <!-- END TO DO => if(user.auth()) -->

    <!-- TO DO => if(!user.auth()) -->

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

  created: function(){

  }

}

</script>

<style lang="scss">
  @import 'custom.scss';
</style>
