<template>
   
  <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light" id="mainNav" v-if="isLoggedIn">
<!-- if user is logged in 
  <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light" id="mainNav">  
-->
  
    <!-- Router link for SPA not refreshing -->
    <!--
      <router-link to="/">Home</router-link>
      <router-link to="/profile">Profile</router-link>
      <router-link to="/organization">Organization</router-link>
    -->
    
    <router-link to="/" tag="a" class="navbar-brand">
      TT Dashboard
    </router-link>
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

<!-- SIDEBAR COLLAPSIBLE -->
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <navbar-collapsible></navbar-collapsible>
<!-- END SIDEBAR COLLAPSIBLE -->

      <ul class="navbar-nav sidenav-toggler">
        <li class="nav-item">
          <a class="nav-link text-center" id="sidenavToggler" @click="sideCollapse">
            <i class="fa fa-fw fa-angle-left"></i>
          </a>
        </li>
      </ul>

      <ul class="navbar-nav ml-auto">
<!-- MESSAGES -->
        <!--
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle mr-lg-2" id="messagesDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fa fa-fw fa-envelope"></i>
            <span class="d-lg-none">Messages
              <span class="badge badge-pill badge-primary">12 New</span>
            </span>
            <span class="indicator text-primary d-none d-lg-block">
              <i class="fa fa-fw fa-circle"></i>
            </span>
          </a>
          <div class="dropdown-menu" aria-labelledby="messagesDropdown">
            <h6 class="dropdown-header">New Messages:</h6>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">
              <strong>David Miller</strong>
              <span class="small float-right text-muted">11:21 AM</span>
              <div class="dropdown-message small">Hey there! This new version of SB Admin is pretty awesome! These messages clip off when they reach the end of the box so they don't overflow over to the sides!</div>
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">
              <strong>Jane Smith</strong>
              <span class="small float-right text-muted">11:21 AM</span>
              <div class="dropdown-message small">I was wondering if you could meet for an appointment at 3:00 instead of 4:00. Thanks!</div>
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">
              <strong>John Doe</strong>
              <span class="small float-right text-muted">11:21 AM</span>
              <div class="dropdown-message small">I've sent the final files over to you for review. When you're able to sign off of them let me know and we can discuss distribution.</div>
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item small" href="#">View all messages</a>
          </div>
        </li>
        -->
<!-- END MESSAGES -->

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle mr-lg-2" id="alertsDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fa fa-fw fa-bell"></i>
            <span class="d-lg-none">Alerts
              <span class="badge badge-pill badge-warning">6 New</span>
            </span>
            <span class="indicator text-warning d-none d-lg-block">
              <i class="fa fa-fw fa-circle"></i>
            </span>
          </a>
          <div class="dropdown-menu" aria-labelledby="alertsDropdown">
            <h6 class="dropdown-header">New Alerts:</h6>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">
              <span class="text-success">
                <strong>
                  <i class="fa fa-long-arrow-up fa-fw"></i>Status Update</strong>
              </span>
              <span class="small float-right text-muted">11:21 AM</span>
              <div class="dropdown-message small">This is an automated server response message. All systems are online.</div>
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">
              <span class="text-danger">
                <strong>
                  <i class="fa fa-long-arrow-down fa-fw"></i>Status Update</strong>
              </span>
              <span class="small float-right text-muted">11:21 AM</span>
              <div class="dropdown-message small">This is an automated server response message. All systems are online.</div>
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">
              <span class="text-success">
                <strong>
                  <i class="fa fa-long-arrow-up fa-fw"></i>Status Update</strong>
              </span>
              <span class="small float-right text-muted">11:21 AM</span>
              <div class="dropdown-message small">This is an automated server response message. All systems are online.</div>
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item small" href="#">View all alerts</a>
          </div>
        </li>

<!-- SEARCH -->
        <!--
        <li class="nav-item">
          <form class="form-inline my-2 my-lg-0 mr-lg-2">
            <div class="input-group">
              <input class="form-control" type="text" placeholder="Search for...">
              <span class="input-group-btn">
                <button class="btn btn-primary" type="button">
                  <i class="fa fa-search"></i>
                </button>
              </span>
            </div>
          </form>
        </li>
        -->
<!-- END SEARCH -->

        <li class="nav-item">
          <!--
          <router-link to="/logout" tag="a" class="nav-link" title="Logout">
            <i class="fa fa-fw fa-sign-out"></i>
          </router-link> 
          -->
          <a @click="logout" tag="a" class="nav-link" title="Logout">
            <i class="fa fa-fw fa-sign-out"></i>
          </a>    
        </li>

      </ul>  

    </div>
  </nav>
</template>

<script>

export default {

  name: 'navbar',

  data() {
    return {
      isSideCollapse: false // initial state
    }

  },

  created: function(){
    //console.log('[COMP CREATED]::Navbar');
  },

  computed: {
    isLoggedIn() {
      //var getAuthState = this.$store.getters["auth/isLoggedIn"];
      var getAuthState = this.$store.getters["authFirebase/isLoggedIn"]; // WITH FIREBASE
      console.log("[NAVBAR] auth state =",getAuthState);
      if(!getAuthState){
        this.$router.replace('/login'); // If auth state false redirect to login
      } else {
        //this.$store.dispatch("authFirebase/loginSuccess", user); // DISPATCH ACTION TO GET AUTHed USER INFO
        this.$store.dispatch("authFirebase/loginSuccess");
        this.$store.dispatch('getAuthUserFirebase/getAuthUser',getAuthState);
        return getAuthState;
      }
      
    }
  },

  methods: {
    logout() {
      //this.$store.dispatch('auth/logout');
      this.$store.dispatch('authFirebase/logout'); // WITH FIREBASE
      if(!this.isLoggedIn){
        this.$router.replace('/login'); // If auth state false redirect to login
      }
    },
    sideCollapse(){
      //console.log("SIDE COLLAPSE!")
      if(!this.isSideCollapse){
        document.body.classList.toggle('sidenav-toggled');
        this.isSideCollapse = true;
      }else{
        document.body.classList.toggle('sidenav-toggled');
        this.isSideCollapse = false;
      }
    }
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- If not used please comment -->
<!--
<style lang="scss" scoped>
/* NAVBAR SCOPED STYLES */
</style>
-->
