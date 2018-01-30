<template>

  <div id="app" class="talentooAdmin" v-bind:class="{ loginView: !isLoggedIn }">

    <navbar></navbar>

    <div class="content-wrapper">
  
      <!-- the router outlet, where all matched components would be viewed -->
      <transition name="fade">
        <router-view/>
      </transition>

      <app-footer></app-footer>

    </div>

    <!--<div class="loader" v-if="loading">-->
    <div class="loader" v-bind:class="{ active: isLoading }">
      <div class="spinner square" v-if="isLoading"></div>
    </div>

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
    isLoggedIn: function () {
      var getAuthState = this.$store.getters["auth/isLoggedIn"];
      //console.log(this.$store.getters["auth/isLoggedIn"])
      return getAuthState;
    },
    isLoading() {
      var loadingState = this.$store.getters["auth/pending"];
      //console.log("GETTER authState =",getAuthState)
      return loadingState;
    }
  },

  created: function(){

  }

}

</script>

<style lang="scss">
  @import 'custom.scss';
</style>
