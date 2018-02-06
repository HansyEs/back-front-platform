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

import store from './store/store'
import firebase from 'firebase'

export default {

  name: 'app',

  data() {
    return {
    }
  },

  computed: {
    isLoggedIn: function () {
      //var getAuthState = this.$store.getters["auth/isLoggedIn"];
      var getAuthState = this.$store.getters["authFirebase/isLoggedIn"]; // WITH FIREBASE
      //console.log(this.$store.getters["auth/isLoggedIn"])
      return getAuthState;
    },
    isLoading() {
      //var loadingState = this.$store.getters["auth/pending"];
      var loadingState = this.$store.getters["authFirebase/pending"]; // WITH FIREBASE
      //console.log("GETTER authState =",getAuthState)
      return loadingState;
    }
  },

  beforeCreate: function() {
    // CHECK IF USER IS AUTHed TO AVOID RELOAD PROBLEMS
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
          // IF USER AUTHed
          // Dispatch mutation for persistent auth state behaviour
          this.$store.commit("authFirebase/LOGIN_SUCCESS",user)
        }else{
          // IF USER !AUTHed
          // Let the router app do its work
          // console.log("USER AUTH > NOPE!");
        }
    })
  },

  created: function(){

  }

}

</script>

<style lang="scss">
  @import 'custom.scss';
</style>
