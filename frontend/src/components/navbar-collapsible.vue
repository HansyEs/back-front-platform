<template>
  <ul class="navbar-nav navbar-sidenav" id="exampleAccordion">
    <li class="user-sidebar-view">
      <div class="user-icon">
        <router-link to="/profile" class="">
          <i class="fa fa-user-o"></i>
        </router-link>
      </div>
      <user-sidebar></user-sidebar>
    </li>
    <router-link to="/home" tag="li" class="nav-item" data-toggle="tooltip" data-placement="right" title="" data-original-title="Dashboard">
      <a><i class="fa fa-home"></i><span>Home</span></a>
    </router-link>
    <router-link to="/organization" tag="li" class="nav-item" data-toggle="tooltip" data-placement="right" title="" data-original-title="Organization">
      <a><i class="fa fa-sitemap"></i><span>Organization</span></a>
    </router-link>
    <!-- TEMPLATE
    <li class="nav-item" data-toggle="tooltip" data-placement="right" title="" data-original-title="Tables">
      <a class="nav-link" href="tables.html">
        <i class="fa fa-fw fa-table"></i>
        <span class="nav-link-text">Tables</span>
      </a>
    </li>
    <li class="nav-item" data-toggle="tooltip" data-placement="right" title="" data-original-title="Components">
      <a class="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseComponents" data-parent="#exampleAccordion">
        <i class="fa fa-fw fa-wrench"></i>
        <span class="nav-link-text">Components</span>
      </a>
      <ul class="sidenav-second-level collapse" id="collapseComponents">
        <li>
          <a href="navbar.html">Navbar</a>
        </li>
        <li>
          <a href="cards.html">Cards</a>
        </li>
      </ul>
    </li>
    -->
  </ul>
</template>

<script>

export default {

  name: 'navbar-collapsible',

  data() {
    return {
    }

  },

  created: function(){
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- If not used please comment -->
<!--
<style lang="scss" scoped>
/* NAVBAR COLLAPSIBLE SCOPED STYLES */
</style>
-->
