import Vue from 'vue';
import Router from 'vue-router';
import auth from '@/auth/auth'
import Login from '@/components/Login';
import Home from '@/components/Home';
import UserProfile from '@/components/user-profile';
import Organization from '@/components/Organization';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login // <- LOGIN
    },
    {
      path: '/',
      name: 'Home',
      component: Home // <- WELCOME
      /* TO DO => AUTH => Add to secure URL
      meta: { requiresAuth:true
      }
      */
    },
    {
      path: '/profile',
      name: 'Profile',
      component: UserProfile
      /* TO DO => AUTH => Add to secure URL
      meta: { requiresAuth:true
      }
      */
    },
    {
      path: '/organization',
      name: 'Organization',
      component: Organization,
      //beforeEnter: requireAuth // TO DO => AUTH => Add to secure URL
      meta: { requireAuth:true }
    },
    { path: '/logout',
      beforeEnter (to, from, next) {
        auth.logout()
        next('/login') // Redirect to
      }
    }
  ],
  mode: 'history' // AVOID # from urls
})

// TO DO => AUTH => guard navigation
// Check before each page load whether the page requires authentication/
// if it does check whether the user is signed into the web app or
// redirect to the sign-in page to enable them to sign-in

/*
Router.beforeEach((to, from, next) => {
  if (!auth.loggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
});
*/

/*
function requireAuth (to, from, next) {
  if (!auth.loggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}
*/