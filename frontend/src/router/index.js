import Vue from 'vue';
import Router from 'vue-router';
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
    },
    { path: '/logout',
      beforeEnter (to, from, next) {
        store.dispatch('auth/logout');
        next('/login') // Redirect to
      }
    }
  ],
  mode: 'history', // AVOID # from urls
  history: true
})

// TO DO => AUTH
// Global Guards
router.beforeEach((to, from, next) => {

  //console.log("[GLOBAL NAVIGATION GUARD] => REQUIRING AUTH");
  
  const requiresAuth = to.matched.some( record => record.meta.requiresAuth);
  var r = requiresAuth; // Does this url need auth to be shown?

  const authState = store.state.auth.isLoggedIn;
  var a = authState; // User Auth State => Need to be persistent to avoid page reloads problems
  

  if(r === true && authState === true) {

    console.log("[ROUTER] case 1 =>","r:",r,"a:",a);
    // App content
    next(); // Keep goint to url

  } else if(r === false) {

    console.log("[ROUTER] case 2 =>","r:",r,"a:",a);
    // 'logout'
    // 'login'
    next(); // Keep goint to url

  } else {

    console.log("[ROUTER] case 3 =>","r:",r,"a:",a);
    next('login'); // Keep goint to url

  }

})

export default router;