<template>
  <div class="content user-sidebar-view">

    <div class="row">
      <div class="col-sm-8">
        <div class="user-img">
          <img src="" alt="" />
        </div>
      </div>
      <div class="col-sm-4 user-view text-right">
        <router-link to="/profile" class="btn-sm btn-primary">edit</router-link>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <h4 class="ellipsis user-name">User Name User Name User Name User Name</h4>
      </div>
      <div class="col-sm-12 user-role text-left">
        <p>Admin</p>
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

  created: function(){

    // TO DO -> get user ID
    // TO DO -> API get/user:id

  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- If not used please comment
<style lang="scss" scoped>

</style>
-->
