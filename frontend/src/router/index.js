import Vue from 'vue';
import Router from 'vue-router';

import firebase from 'firebase'

import Login from '@/components/Login';
import store from '@/store/store';
import Home from '@/components/Home';
import UserProfile from '@/components/user-profile';
import Organization from '@/components/Organization';

Vue.use(Router)

//export default new Router({
const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login // <- LOGIN
    },
    {
      path: '*', // ROUTES that doesn't exist
      redirect: '/'
    },
    {
      path: '/',
      name: 'Home',
      component: Home, // <- WELCOME
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: UserProfile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/organization',
      name: 'Organization',
      component: Organization,
      meta: {
        requiresAuth: true
      }
    }/*,
    { path: '/logout',
      beforeEnter (to, from, next) {
        store.dispatch('authFirebase/logout')
        next('login') // Redirect to
      }
    }*/
  ],
  mode: 'history', // AVOID # from urls
  history: true
})

// TO DO => AUTH
// Global Guards
router.beforeEach((to, from, next) => {

  //console.log("[GLOBAL NAVIGATION GUARD] => REQUIRING AUTH");
  
  // Does this url need auth to be shown?
  const requiresAuth = to.matched.some( record => record.meta.requiresAuth);

  // User Auth State => Need to be persistent to avoid page reloads problems
  //const authState = store.state.auth.isLoggedIn;
  const authState = store.state.authFirebase.isLoggedIn;

  var r = requiresAuth;
  var a = authState;
  var c;  // Case
  var fb; // Console Feedback

  if(requiresAuth === true && authState) {

    c = 1;
    fb = "";
    // App content
    next(); // Keep goint to url

  } else if(requiresAuth === true && !authState) {

    c = 2;
    fb = "\n- - - - - - - -\nWeird case. App should never get here\nTODO => persistent auth user state.\n- - - - - - - -";
    next({
      path: 'login',
      query: { redirect: to.fullPath }
    });

  } else if(requiresAuth === false && !authState) {

    c = 3;
    fb = "";
    // 'logout'
    // 'login'
    next({
      query: { redirect: to.fullPath } // Keep url user was trying to get
    });

  }

  // ROUTER CONSOLE LOGS
  // console.log("[ROUTER] case",c,"=>","r:",r,"a:",a,fb);

})

export default router;