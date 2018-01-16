<template>

  <div id="app" class="talentooAdmin" >

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

  created: function(){

  }

}

</script>

<style lang="scss">
  @import 'custom.scss';
</style>
