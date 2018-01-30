<template>
  <div class="content">

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
    }
  },

  computed: {
    user () {
      var userData = this.$store.getters['getAuthUser/authUserInfo'];
      //console.log("[COMPONENT :: user-sidebar] Auth User Info =",userData)
      return userData; // from -> ./store/module/getAuthUser
    }
  },

  created: function(){
    //console.log('[COMP CREATED]::user-sidebar');
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- If not used please comment
<style lang="scss" scoped>

</style>
-->
