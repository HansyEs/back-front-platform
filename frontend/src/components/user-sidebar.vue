<template>
  <div class="content user-sidebar-view">

    <div class="row">
      <div class="col-sm-8">
        <div class="user-img">
          <!--<img :src="user.imageURL" alt="" />-->
        </div>
      </div>
      <div class="col-sm-4 user-view text-right">
        <router-link to="/profile" class="btn-sm btn-primary">edit</router-link>
      </div>
    </div>
<!--
    <p>{{user.name}}</p>
-->   
    <div class="row">
      <div class="col-sm-12">
        <h4 class="ellipsis user-name">{{user.name}} {{user.surname}}</h4>
      </div>
      <div class="col-sm-12 user-role text-left">
        <p>{{user.admin}}</p>
      </div>
    </div>
    
  </div>
</template>

<script>

export default {

  name: 'user-sidebar',

  data() {
    return {
      msg: ''
    }
  },

  computed: {
    user () {
      //return this.$store.state.authUser // from -> ./store/store.js
      return this.$store.state.getAuthUser.info; // from -> ./store/getAuthUser module
    }
  },

  created: function(){

  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- If not used please comment
<style lang="scss" scoped>

</style>
-->
